export default function createLocalLink(url, wordPressUrl) {
  if (`#` === url) {
    return null;
  }
  return url.replace(wordPressUrl, ``);
}
