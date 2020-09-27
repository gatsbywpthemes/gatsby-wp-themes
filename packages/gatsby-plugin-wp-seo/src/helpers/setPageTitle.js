export const setPageTitle = (
  title,
  siteTitle,
  siteDesription,
  humanPageNumber,
  titleTemplate
) => {
  let pageTitle = title || siteTitle
  pageTitle += humanPageNumber > 1 ? ` | Page ${humanPageNumber}` : ``
  return titleTemplate === "default"
    ? `${pageTitle} | ${siteTitle}`
    : `${pageTitle} | ${siteDesription}`
}
