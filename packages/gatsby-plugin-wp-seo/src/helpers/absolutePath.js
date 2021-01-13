import normalize from "normalize-path"

export const absolutePath = (siteUrl, path) => {
  return normalize(`${siteUrl}/${path}`)
}
