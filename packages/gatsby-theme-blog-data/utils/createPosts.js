const GET_POSTS = `
  # Define our query variables
  query GET_POSTS($first:Int $after:String) {
    wp {
      # Ask for posts
      posts(
          # Ask for the first XX number of posts
          first: $first

          # A Cursor to where in the dataset our query should start
          # and get items _after_ that point
          after:$after
      ) {
          # In response, we'll want pageInfo so we know if we need
          # to fetch more posts or not.
          pageInfo {
              # If true, we need to ask for more data.
              hasNextPage

              # This cursor will be used for the value for $after
              # if we need to ask for more data
              endCursor
          }
          nodes {
            id
            uri
            postId
            title
          }
      }
  }
}
`
/**
 * Array to store allPosts. We make paginated requests
 * to WordPress to get allPosts, and once we have all posts,
 * then we iterate over them to create pages.
 *
 * @type {Array}
 */
const allPosts = []

/**
 * Here we store an array of blogPages. For each xx amount of posts
 * we want to create a postsPath so users can browse
 * chunks of data at a time, much like a traditional
 * WordPress paginated archive page.
 *
 * @type {Array}
 */
const blogPages = []

/**
 * We need to track the page number so we can output the paginated
 * archive template with the appropriate path.
 *
 * @type {number}
 */
let pageNumber = 0

/**
 * We need to track the page number so we can output the paginated
 * archive template with the appropriate path.
 *
 * @type {Boolean}
 */
let go = true

/**
 * This is the export which Gatbsy will use to process.
 *
 * @param { actions, graphql }
 * @returns {Promise<void>}
 */
module.exports = async ({ actions, graphql }, options) => {
  const blogTemplatePath = `../src/templates/posts-query.js`

  const blogTemplate = require.resolve(blogTemplatePath)
  const postTemplatePath = `../src/templates/post-query.js`
  const postTemplate = require.resolve(postTemplatePath)
  const { postsPath, paginationPrefix, postsPerPage } = options
  /**
   * This is the method from Gatsby that we're going
   * to use to create pages in our static site.
   */
  const { createPage } = actions

  /**
   * Fetch posts using the GET_POSTS query and the variables passed in.
   */

  let variables = { first: postsPerPage, after: null }
  while (go) {
    const data = await graphql(GET_POSTS, variables)
    /**
     * Extract the data from the GraphQL query results
     */
    const {
      wp: {
        posts: { nodes, pageInfo },
      },
    } = data.data

    /**
     * Define the path for the paginated blog page.
     * This is the url the page will live at
     * @type {string}
     */

    /**
     * The IDs of the posts which were got from GraphQL.
     */
    const nodeIds = nodes.map((node) => node.postId)

    if (postsPath !== false) {
      const blogPagePath = !variables.after
        ? `${postsPath}/`
        : `${postsPath}/${paginationPrefix}/${pageNumber + 1}`

      /**
       * Add config for the postsPath to the postsPath array
       * for creating later
       *
       * @type {{path: string, component: string, context: {nodes: *, pageNumber: number, hasNextPage: *}}}
       */
      blogPages.push({
        path: blogPagePath,
        component: blogTemplate,
        context: {
          ids: nodeIds,
          allPosts,
          pageNumber: pageNumber + 1,
          hasNextPage: pageInfo ? pageInfo.hasNextPage : false,
          postsPerPage,
        },
      })
    }
    /**
     * Map over the posts for later creation
     */
    nodes &&
      nodes.map((post) => {
        allPosts.push(post)
      })

    /**
     * If there's another page, fetch more
     * so we can have all the data we need.
     */
    if (pageInfo && pageInfo.hasNextPage) {
      pageNumber++
      variables.after = pageInfo.endCursor
    } else {
      go = false
    }
  }

  /**
   * Kick off our `fetchPosts` method which will get us all
   * the posts we need to create individual post pages
   * and paginated blogroll archive pages.
   */
  /**
   * Map over the allPosts array to create the
   * single-post pages
   */
  allPosts &&
    allPosts.map((post, index) => {
      createPage({
        path: `/${post.uri}`,
        component: postTemplate,
        context: {
          ...post,
          prev: allPosts[index + 1],
          next: allPosts[index - 1],
          postsPath: options.postsPath,
          wordPressUrl: options.wordPressUrl,
          uploadsUrl: options.uploadsUrl,
        },
      })
    })

  /**
   * Map over the `blogPages` array to create the
   * paginated blogroll pages
   */
  blogPages &&
    blogPages.map((archivePage) => {
      //console.log(`createpostsPath ${archivePage.context.pageNumber}`)
      createPage(archivePage)
    })
}
