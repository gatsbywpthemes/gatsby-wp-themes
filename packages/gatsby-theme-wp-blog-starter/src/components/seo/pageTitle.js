const pageTitle = (
  title,
  siteTitle,
  siteDesription,
  pageNumber,
  titleTemplate
) => {
  let pageTitle = title || siteTitle
  pageTitle += pageNumber > 1 ? ` | Page ${pageNumber}` : ``
  return titleTemplate === 'default'
    ? `${pageTitle} | ${siteTitle}`
    : `${pageTitle} | ${siteDesription}`
}

export default pageTitle
