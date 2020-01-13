import React from "react"
import ReactMapboxGl, {
  ZoomControl,
  Layer,
  Feature,
  Popup,
  Image
} from "react-mapbox-gl"

const MapContent = ({ attrs }) => {
  const mapData = JSON.parse(attrs["data-mapdata"])

  const Map = ReactMapboxGl({
    accessToken: attrs["data-token"],
    scrollZoom: false
  })
  return (
    <Map
      style={attrs["data-style"]}
      containerStyle={{
        height: "400px",
        width: "100vw"
      }}
      center={attrs["data-center"].split(",")}
      zoom={[attrs["data-zoom"]]}
    >
      <ZoomControl />

      {!!mapData.length && (
        <Layer
          type="symbol"
          id="marker"
          layout={{
            "icon-image": ["my-image-uid"]
          }}
        >
          {mapData.map((el, index) => {
            //console.log(mapData[index].geometry.coordinates)
            return <Feature key={index} coordinates={el.geometry.coordinates} />
          })}
        </Layer>
      )}
    </Map>
  )
}

export default MapContent
