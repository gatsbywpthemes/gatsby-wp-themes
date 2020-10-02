import normalize from "normalize-path"

const absolutePath = (siteUrl, path, pathPrefix = "") => {
  path = normalize(`/${path}`)
  if (pathPrefix && path.startsWith(normalize(`/${pathPrefix}/static`))) {
    path = path.replace(normalize(`/${pathPrefix}/static`), "/static")
  }
  return normalize(`${siteUrl}/${path}`)
}

export { absolutePath }
