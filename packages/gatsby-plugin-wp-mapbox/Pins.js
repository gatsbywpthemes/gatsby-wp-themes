import React from "react"
import { Marker } from "react-map-gl"

const ICON1 = `M21,10c0,7 -9,13 -9,13c0,0 -9,-6 -9,-13l1.03029e-13,1.35896e-06c-7.50534e-07,-4.97056 4.02944,-9 9,-9c4.97056,-7.50534e-07 9,4.02944 9,9c0,0 0,7.10543e-15 0,7.10543e-15Z`
const ICON2 = `M14.1213,7.87868c1.17157,1.17157 1.17157,3.07107 0,4.24264c-1.17157,1.17157 -3.07107,1.17157 -4.24264,0c-1.17157,-1.17157 -1.17157,-3.07107 0,-4.24264c1.17157,-1.17157 3.07107,-1.17157 4.24264,-8.88178e-16`

const SIZE = 24

const Pins = ({ data, onClick }) => {
  console.log(data)
  return data.map((el, index) => {
    const longitude = el.geometry
      ? el.geometry.coordinates[0]
      : el.coordinates["longitude"]
    const latitude = el.geometry
      ? el.geometry.coordinates[1]
      : el.coordinates["latitude"]

    return (
      <Marker key={`marker-${index}`} longitude={longitude} latitude={latitude}>
        <svg
          height={SIZE}
          viewBox="0 0 24 24"
          style={{
            cursor: "pointer",
            fill: "white",
            stroke: "black",
            transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
          }}
          onClick={() =>
            onClick({
              longitude,
              latitude,
              title: el.title,
              description: el.properties
                ? el.properties.description
                : el.caption
            })
          }
        >
          <path d={ICON1} />
          <path fill="black" d={ICON2} />
        </svg>
      </Marker>
    )
  })
}

export default Pins
