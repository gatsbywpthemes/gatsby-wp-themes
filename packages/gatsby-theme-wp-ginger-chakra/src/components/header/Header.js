import React from 'react'
import { Link } from 'gatsby'
import {
  useThemeOptions,
  useSiteSettings,
} from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { ColorSwitch, Logo } from 'gingerThemeComponents'
import { Flex } from '@chakra-ui/react'
import { useThemeColorModeValue } from 'gingerThemeSrc/hooks/useThemeColorModeValue'

export const Header = () => {
  const siteSettings = useSiteSettings()
  const { addColorModes, logo } = useThemeOptions()
  return (
    <Flex
      as="header"
      bg={useThemeColorModeValue('headerBg')}
      color={useThemeColorModeValue('headerColor')}
      position={['sticky', 'sticky', 'fixed']}
      zIndex={10}
      top={0}
      h={(theme) => [theme.sizes.header[0], theme.sizes.header[1], '100vh']}
      align={['center', 'center', 'initial']}
      px={[3, 3, 0]}
      w={(theme) => ['auto', 'auto', theme.sizes.header[2]]}
    >
      {logo ? (
        <Logo />
      ) : (
        <Flex
          as={Link}
          align="center"
          to="/"
          rel="home"
          sx={{
            height: (theme) => ['auto', 'auto', theme.sizes.header[2]],
            whiteSpace: 'nowrap',
            textDecoration: 'none',
            fontFamily: 'heading',
            fontWeight: 'heading',
            fontSize: '3xl',
            position: 'absolute',
            top: ['auto', 'auto', 0],
            transformOrigin: '0 0',
            transform: [
              null,
              null,
              'translate3d(0, 1rem, 0) rotate(-90deg) translate3d(-100%,0,0)',
            ],
            transition: 'none',
            '&, :hover': {
              color: 'inherit',
            },
          }}
        >
          {siteSettings.title}
        </Flex>
      )}
      {!!addColorModes && <ColorSwitch />}
    </Flex>
  )
}
