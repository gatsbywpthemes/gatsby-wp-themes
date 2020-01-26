import { graphql } from 'gatsby'
import User from '../gatsby-theme-blog-data/components/User'
export default User

export const pageQuery = graphql`
  query GET_USER1($id: ID!, $ids: [ID], $postsPerPage: Int!) {
    wp {
      user(id: $id) {
        name
        slug
        id
        description
        uri
        avatar {
          url
        }
        posts(first: $postsPerPage, where: { in: $ids }) {
          nodes {
            ...PostTemplateFragment1
          }
        }
      }
    }
  }
`
