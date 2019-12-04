import { useStaticQuery, graphql } from 'gatsby'

const useMenusQuery = () => {
  const data = useStaticQuery(graphql`
    fragment MenuFields on WP_MenuItem {
      id
      label
      url
      target
      connectedObject {
        __typename
      }
    }

    query GET_MENUS_ITEMS {
      wp {
        menus {
          edges {
            node {
              id
              menuId
              name
              slug
              count
              menuItems {
                nodes {
                  ...MenuFields
                  childItems {
                    nodes {
                      ...MenuFields
                      childItems {
                        nodes {
                          ...MenuFields
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return data.wp.menus.edges
}

export default useMenusQuery
