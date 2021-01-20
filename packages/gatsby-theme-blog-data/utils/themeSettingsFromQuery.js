const themeSettingsFromQuery = `gatsbywpthemes {
  paginationPrefix
  logo {
    localFile {
      childImageSharp {
        fixed {
          src
        }
      }
    }
  }
  darkModeLogo {
    localFile {
      childImageSharp {
        fixed {
          src
        }
      }
    }
  }
}`

module.exports = themeSettingsFromQuery
