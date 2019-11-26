const sourceParser = require("./sourceParser")
const debugLog = require("./utils").debugLog

const findExistingNode = (uri, allNodes) =>
  allNodes.find(node => node.sourceUri === uri)

module.exports = async function createResolvers(params, pluginOptions) {
  const contentNodeType = "ParsedWordPressContent"
  const {
    createResolvers,
    createNodeId,
    createContentDigest,
    getNodesByType
  } = params
  const {
    actions: { createNode }
  } = params
  const {
    graphqlTypeName = `WPGraphQL`,
    processPostTypes = ["Page", "Post"],
    debugOutput = false
  } = pluginOptions

  const logger = (...args) => {
    args.unshift(">>>")
    debugLog(debugOutput, ...args)
  }

  // `content` field Resolver
  // - passes content to sourceParser
  // - saves (caches) the result to a `ParsedWordPressContent` node
  // - repeat request for the same content (determined by uri) returns cached result
  const contentResolver = async (source, args, context, info) => {
    const { uri } = source
    let parsedContent = ""
    logger("Entered contentResolver @", uri || "URI not defined, skipping")

    if (!uri) {
      return source.content
    }

    // if a node with a given URI exists
    const cached = findExistingNode(uri, getNodesByType(contentNodeType))
    // returns content from that node
    if (cached) {
      return cached.parsedContent
    }

    try {
      parsedContent = await sourceParser(source, pluginOptions, params, context)
    } catch (e) {
      console.log(`Failed sourceParser at ${uri}`, e)
      return source.content
    }

    logger(`[ORIGINAL CONTENT @ ${uri}]`, source.content)
    logger(`[PARSED CONTENT @ ${uri}]`, parsedContent)

    let payload = {
      parsedContent,
      sourceId: source.id,
      sourceUri: source.uri,
      sourcePageId: source.pageId
    }

    let node = {
      ...payload,
      id: createNodeId(source.uri, contentNodeType),
      children: [],
      parent: null,
      internal: {
        type: contentNodeType,
        contentDigest: createContentDigest(payload)
      }
    }

    await createNode(node)

    return parsedContent
  }

  processPostTypes.forEach(element => {
    let params = {}
    params[`${graphqlTypeName}_${element}`] = {
      content: {
        resolve: contentResolver
      }
    }
    logger("Registering ", `${graphqlTypeName}_${element}`)
    createResolvers(params)
  })
}
