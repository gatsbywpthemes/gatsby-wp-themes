import React from "react"
import Map from "./MapContent"

export const mapboxParserFunction = node => {
  if (
    node.name === "div" &&
    node.attribs &&
    node.attribs.class &&
    node.attribs.class.indexOf("wp-mapbox-gl-js-map") > -1
  ) {
    console.log(node.attribs)
    return <Map attrs={node.attribs} />
  }
}

export default mapboxParserFunction
