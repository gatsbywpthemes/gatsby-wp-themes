/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { useState } from "react"
import MapGL, {
  NavigationControl,
  FullscreenControl,
  Popup
} from "react-map-gl"
import Pins from "./Pins"
import "mapbox-gl/dist/mapbox-gl.css"

const MapContent = ({ attrs }) => {
  const mapData = JSON.parse(attrs["data-points"])
  const center = JSON.parse(attrs["data-map-center"])
  const [viewport, setViewport] = useState({
    latitude: center.lat,
    longitude: center.lng,
    zoom: 16,
    bearing: 0,
    pitch: 0
  })
  console.log(viewport)
  const settings = { scrollZoom: false }

  const [popupInfo, setPopupInfo] = useState(null)

  const openPopup = el => setPopupInfo(el)
  const height = attrs["data-map-height"]
    ? `${attrs["data-map-height"]}px`
    : "400px"
  return (
    <MapGL
      {...viewport}
      {...settings}
      width="100vw"
      height={height}
      mapStyle="mapbox://styles/pehaa/ck4wjw6792izd1dl7kx1m3myy"
      onViewportChange={setViewport}
      mapboxApiAccessToken={attrs["data-api-key"]}
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
                text-align: center;
              }
            `}
          >
            <p>
              <strong dangerouslySetInnerHTML={{ __html: popupInfo.title }} />
            </p>
            <p dangerouslySetInnerHTML={{ __html: popupInfo.description }} />
          </div>
        </Popup>
      )}
    </MapGL>
  )
}

export default MapContent
