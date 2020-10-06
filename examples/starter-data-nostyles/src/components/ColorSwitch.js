/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import { Button } from 'grommet'
import { WiDaySunny, WiMoonAltWaningCrescent4 } from 'react-icons/wi'

export const ColorSwitch = (props) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Button
      a11yTitle="Toggle dark mode"
      focusIndicator={false}
      onClick={() => setColorMode(colorMode === 'default' ? 'dark' : 'default')}
      {...props}
    >
      {colorMode === 'dark' ? (
        <WiDaySunny sx={{ width: `30px`, height: `30px` }} />
      ) : (
        <WiMoonAltWaningCrescent4
          sx={{
            width: `25px`,
            height: `25px`,
            svg: { stroke: `accent`, fill: `accent` },
            mt: 3,
          }}
        />
      )}
    </Button>
  )
}
