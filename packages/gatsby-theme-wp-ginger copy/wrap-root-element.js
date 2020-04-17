import React from 'react'

export default ({ element }, options) => {
  if (options.fonts.some(el => el.toLowerCase().indexOf(`fira sans`) > -1)) {
    require('typeface-fira-sans')
  }
  if (
    options.fonts.some(el => el.toLowerCase().indexOf(`abril fatface`) > -1)
  ) {
    require('typeface-abril-fatface')
  }

  return <>{element}</>
}
