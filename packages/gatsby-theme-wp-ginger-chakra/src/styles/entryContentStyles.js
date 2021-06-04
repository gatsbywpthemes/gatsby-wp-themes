import { transparentize } from '@chakra-ui/theme-tools'
export const entryContentStyles = ({ colorMode }) => {
  return {
    '.animate-on-scroll': {
      opacity: 0,
      transform: 'translate3d(0, 2.5rem, 0)',
      transitionProperty: 'opacity, transform, -webkit-transform',
      transitionDuration: '1s',
    },
    '.sal-disabled, .sal-animate:nth-of-type(n)': {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
    },
    '.wp-block-gallery a': {
      transition: '1s',
    },
    '.wp-block-gallery a:after': {
      content: "''",
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.3)',
      pointerEevents: 'none',
      opacity: 0,
      transition: '0.5s',
    },
    '.wp-block-gallery a:hover:after, .wp-block-gallery a:focus:after': {
      opacity: 1,
    },
    '.has-background:not(.has-text-color),.wp-block-media-text[style*="background"],.wp-block-table.is-style-stripes tbody tr:nth-of-type(odd)':
      {
        bgGradient: (theme) => {
          return colorMode === 'dark'
            ? `linear-gradient(${transparentize(
                'modes.dark.bg',
                0.8
              )(theme)}, ${transparentize('modes.dark.bg', 0.8)(theme)})`
            : `linear-gradient(transparent, transparent)`
        },
        backgroundBlendMode: 'multiply',
      },
  }
}
