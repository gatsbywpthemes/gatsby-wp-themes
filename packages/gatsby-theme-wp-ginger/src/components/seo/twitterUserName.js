import URIParser from 'urijs'
const twitterUserName = social => {
  const twitter = social.find(el => el.name === 'twitter' && el.url)
  if (!!twitter) {
    const { url } = twitter
    return URIParser(url)
      .path()
      .replace('/', '@')
  }
  return null
}
export default twitterUserName
