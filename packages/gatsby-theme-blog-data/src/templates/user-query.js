import { graphql } from 'gatsby'
import User from '../components/User'
export default User

export const pageQuery = graphql`
  query GET_USER($id: ID!, $ids: [ID], $postsPerPage: Int!) {
    wp {
      user(id: $id) {
        name
        slug
        id
        description
        avatar {
          url
        }
        posts(first: $postsPerPage, where: { in: $ids }) {
          nodes {
            ...PostTemplateFragment
          }
        }
      }
    }
  }
`
