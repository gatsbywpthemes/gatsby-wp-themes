import normalize from "normalize-path"

const absolutePath = (siteUrl, path) => {
  return normalize(`${siteUrl}/${path}`)
}

export { absolutePath }
