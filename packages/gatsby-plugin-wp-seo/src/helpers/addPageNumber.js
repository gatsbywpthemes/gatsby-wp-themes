export const addPageNumber = (title, humanPageNumber, numberOfPages) => {
  if (title) {
    title += humanPageNumber > 1 ? ` | ${humanPageNumber}` : ``
    title += humanPageNumber > 1 && numberOfPages ? ` / ${numberOfPages}` : ``
  }
  return title
}
