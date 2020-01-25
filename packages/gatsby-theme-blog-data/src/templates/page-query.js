import { graphql } from 'gatsby'
import Page from '../components/Page'

export default Page

export const pageQuery = graphql`
  query GET_PAGE($id: ID!) {
    wp {
      page(id: $id) {
        title
        content
        uri
        slug
        isFrontPage
        template {
          ... on WP_DefaultTemplate {
            templateName
          }
          ... on WP_FullWidthTemplate {
            templateName
          }
          ... on WP_LeftSidebarTemplate {
            templateName
          }
          ... on WP_RightSidebarTemplate {
            templateName
          }
        }
      }
    }
  }
`
