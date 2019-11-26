import { useStaticQuery, graphql } from 'gatsby'

const useMenuQuery = () => {
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

    query GET_MENU_ITEMS {
      wp {
        menuItems(where: { location: PRIMARY }) {
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
  `)
  return data.wp.menuItems
}

export default useMenuQuery
