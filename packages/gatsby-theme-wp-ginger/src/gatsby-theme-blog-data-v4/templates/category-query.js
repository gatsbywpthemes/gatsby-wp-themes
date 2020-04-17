import { graphql } from 'gatsby'
import Category from '../components/Category'

export default Category

export const pageQuery = graphql`
  query($slug: String!, $limit: Int!, $skip: Int!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        uri
        title
        excerpt
        date
        featuredImage {
          ...GatsbyImageQueryArchive
        }
      }
    }
    wpCategory(slug: { eq: $slug }) {
      uri
      name
      description
    }
  }
`
