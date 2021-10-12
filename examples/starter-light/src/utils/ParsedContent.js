import HTMLReactParser from "html-react-parser"

export const ParsedContent = ({ content }) => {
  return HTMLReactParser(content)
}
