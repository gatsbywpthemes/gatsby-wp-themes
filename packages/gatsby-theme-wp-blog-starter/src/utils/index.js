export * from './ActivatePostScripts'
export * from './ActivatePageScripts'
export * from './hooks'

export const createLocalLink = (url, wordPressUrl) => {
  if (`#` === url) {
    return null
  }
  return url.replace(wordPressUrl, ``)
}
