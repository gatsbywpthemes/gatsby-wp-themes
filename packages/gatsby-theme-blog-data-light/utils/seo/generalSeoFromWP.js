const generalSeoFromWP = `seo {
  social {
    facebook {
      url
    }
    linkedIn {
      url
    }
    twitter {
      cardType
      username
    }
  }
  schema {
    siteName
    wordpressSiteName
    inLanguage
  }
  openGraph {
    frontPage {
      title
      description
      image {
        localFile {
          childImageSharp {
            original {
              height
              src
              width
            }
          }
        }
      }
    }
    defaultImage {
      localFile {
        childImageSharp {
          original {
            src
            height
            width
          }
        }
      }
    }
  }
}`

module.exports = generalSeoFromWP
