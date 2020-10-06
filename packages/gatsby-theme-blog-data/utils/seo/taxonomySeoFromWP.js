const taxonomySeoFromWP = `seo {
      metaDesc
      metaKeywords
      opengraphAuthor
      opengraphDescription
      opengraphType
      opengraphTitle
      opengraphModifiedTime
      opengraphUrl
      twitterDescription
      twitterTitle
      cornerstone
      title
      opengraphImage {
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
      twitterImage {
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
  `

module.exports = taxonomySeoFromWP
