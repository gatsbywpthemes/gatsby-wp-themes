module.exports = async function sourceParser({ content }) {
  if (!content) {
    return ``
  }

  if (content.includes("jetpack-map")) {
    console.log(content)
  }

  const replacePre = (match, open, code) => {
    const regex1 = new RegExp(/</, "gi")
    code = code.replace(regex1, "&lt;")
    const regex2 = new RegExp(/>/, "gi")
    code = code.replace(regex2, "&gt;")
    return `${open}${code}</code></pre>`
  }

  const preRegex = /(<pre.*><code.*?>)((.|\n)*?)<\/code><\/pre>/gm
  content = content.replace(preRegex, replacePre)

  return content

}
