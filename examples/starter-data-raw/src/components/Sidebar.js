/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { Fragment } from 'react'
import Widgets from './widgets/Widgets'

const Sidebar = ({ widgets }) => {
  return (
    <Fragment>
      {widgets && widgets.length > 0 && (
        <Box className="sidebar">
          {widgets.map((widget, i) => (
            <Box key={i}>
              <Widgets widget={widget} />
            </Box>
          ))}
        </Box>
      )}
    </Fragment>
  )
}

export default Sidebar
