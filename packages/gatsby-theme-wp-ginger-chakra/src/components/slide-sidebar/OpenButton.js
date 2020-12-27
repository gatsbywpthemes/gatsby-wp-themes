import React, { forwardRef } from 'react'
import { FiMenu } from 'react-icons/fi'
import { useThemeColorModeValue } from 'gingerThemeSrc/hooks/useThemeColorModeValue'
import { Button } from 'gingerThemeUiComponents/Button'

export const OpenButton = forwardRef(({ ...rest }, ref) => {
  return (
    <Button
      ref={ref}
      aria-label="Open navigation menu"
      {...rest}
      sx={{
        color: useThemeColorModeValue('menuButtonColor'),
        bg: useThemeColorModeValue('menuButtonBg'),
        '&:hover svg': {
          color: useThemeColorModeValue('menuButtonBg'),
        },
        position: 'fixed',
        top: (theme) => {
          const header0 = theme.sizes.header[0].split('rem')
          const header1 = theme.sizes.header[1].split('rem')
          return [
            `${0.5 * (Number(header0[0]) - 3.25)}rem`,
            `${0.5 * (Number(header1[0]) - 3.25)}rem`,
            '1rem',
          ]
        },
        right: '1rem',
        zIndex: 11,
        '&.btn-menu-opened': {
          transform: 'translate3d(6rem, 0, 0)',
        },
      }}
      variant="circle"
    >
      <FiMenu />
    </Button>
  )
})
