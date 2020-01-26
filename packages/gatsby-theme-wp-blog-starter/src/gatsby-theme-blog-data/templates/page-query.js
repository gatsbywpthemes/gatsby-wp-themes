import { graphql } from 'gatsby'
import Page from '../components/Page'

export default Page

export const pageQuery = graphql`
  query GET_PAGE_STARTER($id: ID!) {
    wp {
      page(id: $id) {
        title
        content
        uri
        slug
        isFrontPage
        template {
          ...PageTemplates_starter
        }
      }
    }
  }
`
