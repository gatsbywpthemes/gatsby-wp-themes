module.exports = async ({
  actions,
  graphql,
  options,
  baseQuery = null,
  paginationQuery,
  template,
  baseType,
  paginationType,
  pathPrefix,
  allItems = [],
}) => {
  const { postsPerPage, paginationPrefix } = options

  const { createPage } = actions
  let variables = { first: 100, after: null }
  let go = true
  if (baseQuery) {
    while (go) {
      const { data } = await graphql(baseQuery, variables)
      const {
        nodes,
        pageInfo: { hasNextPage, endCursor },
      } = data.wp[baseType]

      nodes.map(item => {
        allItems.push(item)
      })
      if (hasNextPage) {
        variables.after = endCursor
      } else {
        go = false
      }
    }
  }

  const pageCreation = async all => {
    const allPages = []
    for (let i = 0; i < all.length; i++) {
      const item = all[i]
      let go = true
      let pageNumber = 0
      let variables = { id: item.id, first: postsPerPage, after: null }
      while (go) {
        const { data } = await graphql(paginationQuery, variables)
        const {
          nodes,
          pageInfo: { hasNextPage, endCursor },
        } = data.wp[paginationType].posts

        const pagePath = !variables.after
          ? `/${item.uri}`
          : `/${item.uri}/${paginationPrefix}/${pageNumber + 1}`

        /**
         * The IDs of the posts which were got from GraphQL.
         */
        const nodeIds = nodes.map(node => node.postId)

        allPages.push({
          path: pagePath,
          component: template,
          context: {
            id: item.id,
            ids: nodeIds,
            pageNumber: pageNumber + 1,
            hasNextPage,
            postsPerPage,
          },
        })
        if (hasNextPage) {
          pageNumber++
          variables.after = endCursor
        } else {
          go = false
        }
      }
    }
    return allPages
  }
  const blogPagesByType = await pageCreation(allItems)
  blogPagesByType &&
    blogPagesByType.map(archivePage => {
      createPage(archivePage)
    })
}
