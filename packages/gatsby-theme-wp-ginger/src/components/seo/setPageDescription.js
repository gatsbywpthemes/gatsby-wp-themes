import striptags from 'striptags'

export const setPageDescription = (description, siteDesription) => {
  let pageDescription = description || siteDesription
  pageDescription = striptags(pageDescription)
  pageDescription =
    pageDescription.length < 160
      ? pageDescription
      : pageDescription.slice(0, 159) + '...'
  return pageDescription
}
