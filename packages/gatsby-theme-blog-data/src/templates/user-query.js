import { graphql } from 'gatsby'
import User from '../components/User'
export default User

export const pageQuery = graphql`
  query GET_USER($id: ID!, $ids: [ID]) {
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
        posts(where: { in: $ids }) {
          nodes {
            ...PostTemplateFragment
          }
        }
      }
    }
  }
`
