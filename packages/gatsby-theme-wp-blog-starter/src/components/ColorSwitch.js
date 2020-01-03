/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import { Button } from 'grommet'
import { WiDaySunny, WiMoonAltWaningCrescent4 } from 'react-icons/wi'

const ColorSwitch = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Button
      a11yTitle="Toggle dark mode"
      onClick={() => setColorMode(colorMode === 'default' ? 'dark' : 'default')}
    >
      {colorMode === 'dark' ? (
        <WiDaySunny sx={{ width: `30px`, height: `30px` }} />
      ) : (
        <WiMoonAltWaningCrescent4
          sx={{
            width: `30px`,
            height: `30px`,
            svg: { stroke: `accent`, fill: `accent` },
          }}
        />
      )}
    </Button>
  )
}

export default ColorSwitch
