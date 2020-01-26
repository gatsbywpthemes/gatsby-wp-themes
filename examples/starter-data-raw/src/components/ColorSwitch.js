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
      {colorMode === 'dark' ? <WiDaySunny /> : <WiMoonAltWaningCrescent4 />}
    </Button>
  )
}

export default ColorSwitch
