import HTMLReactParser from "html-react-parser"

export const ParsedContent = ({ content }) => {
  if (typeof content !== "string") {
    return content
  }
  if (content === "") {
    return []
  }

  return HTMLReactParser(content)
}
