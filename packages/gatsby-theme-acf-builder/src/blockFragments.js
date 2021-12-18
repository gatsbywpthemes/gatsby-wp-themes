import { graphql } from "gatsby"

export const fragments = graphql`
  fragment button on WpAcfLink {
    url
    title
    target
  }
`
