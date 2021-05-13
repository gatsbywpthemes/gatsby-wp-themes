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
          locations
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

export const useMenuItems = (location) => {
  const menuEdges = useMenusQuery()
  const menuEdge = menuEdges.find((n) => n.locations.includes(location))
  return menuEdge ? menuEdge.menuItems : null
}
