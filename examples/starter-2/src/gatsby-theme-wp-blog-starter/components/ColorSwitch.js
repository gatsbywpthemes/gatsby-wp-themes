/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { Button } from "grommet"
import { WiDaySunny, WiMoonAltWaningCrescent4 } from "react-icons/wi"

const ColorSwitch = ({ ...props }) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Button
      a11yTitle="Toggle dark mode"
      onClick={() =>
        setColorMode(colorMode === "default" ? "light" : "default")
      }
      {...props}
    >
      {colorMode === "light" ? (
        <WiMoonAltWaningCrescent4
          sx={{
            width: `25px`,
            height: `25px`,
            svg: { stroke: `accent`, fill: `accent` },
            mt: 3,
          }}
        />
      ) : (
        <WiDaySunny sx={{ width: `30px`, height: `30px` }} />
      )}
    </Button>
  )
}

export default ColorSwitch
