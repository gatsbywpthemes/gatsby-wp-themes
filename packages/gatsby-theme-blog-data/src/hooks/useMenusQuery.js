import { useStaticQuery, graphql } from 'gatsby'

const useMenusQuery = () => {
  const data = useStaticQuery(graphql`
    fragment MenuFields on WpMenuItem {
      id
      label
      url
      target
      cssClasses
      connectedObject {
        __typename
      }
    }

    query GET_MENUS_ITEMS {
      allWpMenu {
        nodes {
          id
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
  `)
  return data.allWpMenu.nodes
}

export default useMenusQuery
