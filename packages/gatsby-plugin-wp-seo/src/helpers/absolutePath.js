import slashes from "remove-trailing-slash"

export const absolutePath = (siteUrl, path) => {
  return `${slashes(siteUrl)}${path}`
}
