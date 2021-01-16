import { useEffect } from "react"

export const ActivatePostScripts = () => {
  useEffect(() => {
    import(/* webpackChunkName: "prismjs" */ "prismjs").then((mod) => {
      // call the highlightAll() function to style our code blocks
      mod.default.highlightAll()
    })
  }, [])
  return null
}
