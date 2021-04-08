import slashes from "remove-trailing-slash"

export const absolutePath = (siteUrl, path) => {
  console.log(siteUrl, path)
  return `${slashes(siteUrl)}${path}`
}
