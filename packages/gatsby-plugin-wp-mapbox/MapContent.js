/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React, { useState } from "react"
import MapGL, {
  NavigationControl,
  FullscreenControl,
  Popup
} from "react-map-gl"
import Pins from "./Pins"
import "mapbox-gl/dist/mapbox-gl.css"

const MapContent = ({ attrs }) => {
  const mapData = JSON.parse(attrs["data-mapdata"])
  console.log(mapData, Number(attrs["data-zoom"]))
  const center = attrs["data-center"].split(",")
  const [viewport, setViewport] = useState({
    latitude: Number(center[1]),
    longitude: Number(center[0]),
    zoom: Number(attrs["data-zoom"]),
    bearing: 0,
    pitch: 0
  })

  const settings = { scrollZoom: false }

  const [popupInfo, setPopupInfo] = useState(null)

  const openPopup = el => setPopupInfo(el)

  return (
    <MapGL
      {...viewport}
      {...settings}
      width="100vw"
      height="400px"
      mapStyle={attrs["data-style"]}
      onViewportChange={setViewport}
      mapboxApiAccessToken={attrs["data-token"]}
    >
      <div style={{ position: "absolute", right: "10px", top: "10px" }}>
        <NavigationControl />
      </div>
      <div style={{ position: "absolute", left: "10px", top: "10px" }}>
        <FullscreenControl />
      </div>
      <Pins data={mapData} onClick={openPopup} />
      {popupInfo && (
        <Popup
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => setPopupInfo(null)}
        >
          <div
            css={css`
              &,
              p {
                font-size: 0.75rem;
                margin: 0;
                color: black;
              }
            `}
            dangerouslySetInnerHTML={{ __html: popupInfo.description }}
          />
        </Popup>
      )}
    </MapGL>
  )
}

export default MapContent
