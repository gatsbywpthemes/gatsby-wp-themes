import striptags from 'striptags'

const pageDescription = (description, siteDesription) => {
  let pageDescription = description || siteDesription
  pageDescription = striptags(pageDescription)
  pageDescription =
    pageDescription.length < 160
      ? pageDescription
      : pageDescription.slice(0, 159) + '...'
  return pageDescription
}

export default pageDescription
