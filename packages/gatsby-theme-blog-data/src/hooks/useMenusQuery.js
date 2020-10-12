import { useStaticQuery, graphql } from 'gatsby'

export const useMenusQuery = () => {
  const data = useStaticQuery(graphql`
    fragment MenuFields on WpMenuItem {
      id
      parentId
      label
      url
      target
      cssClasses
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
            }
          }
        }
      }
    }
  `)
  return data.allWpMenu.nodes
}
