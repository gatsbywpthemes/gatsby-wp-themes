import React, { Fragment } from "react"
import Map from "./MapContent"
import MapJetpack from "./MapJetpackContent"
export const mapboxParserFunction = node => {
  if (
    node.name === "div" &&
    node.attribs &&
    node.attribs.class &&
    node.attribs.class.indexOf("wp-mapbox-gl-js-map") > -1
  ) {
    return <Map attrs={node.attribs} />
  }
  if (
    node.name === "input" &&
    node.attribs &&
    node.attribs.id &&
    node.attribs.id.indexOf("wp_mapbox_gl") === 0
  ) {
    return <Fragment />
  }
  if (
    node.name === "div" &&
    node.attribs &&
    node.attribs.class &&
    node.attribs.class.indexOf("wp-block-jetpack-map") > -1
  ) {
    return <MapJetpack attrs={node.attribs} />
  }
}

export default mapboxParserFunction
