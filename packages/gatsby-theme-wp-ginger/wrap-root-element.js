import React from 'react'

export default ({ element }, options) => {
  if (options.fonts.some(el => el.indexOf(`fira sans`) > -1)) {
    require('typeface-fira-sans')
  }
  if (options.fonts.some(el => el.indexOf(`abril fatface`) > -1)) {
    require('typeface-abril-fatface')
  }

  return <>{element}</>
}
