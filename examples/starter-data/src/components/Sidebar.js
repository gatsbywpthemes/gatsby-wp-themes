/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { Fragment } from 'react'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import Widgets from './widgets/Widgets'
import sidebarStyles from '../styles/sidebarStyles'

const Sidebar = () => {
  const { widgets } = useThemeOptions().widgetAreas.sidebar

  return (
    <Fragment>
      {widgets && widgets.length > 0 && (
        <Box className="sidebar" sx={sidebarStyles}>
          {widgets.map((widget, i) => (
            <Box sx={{ my: `l` }} key={i}>
              <Widgets widget={widget} />
            </Box>
          ))}
        </Box>
      )}
    </Fragment>
  )
}

export default Sidebar
