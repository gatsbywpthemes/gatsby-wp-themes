import React from 'react'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Flex, Link } from '@chakra-ui/react'

import {
  faBehance,
  faCodepen,
  faDev,
  faDiscord,
  faDribbble,
  faFacebook,
  faGithub,
  faGitlab,
  faInstagram,
  faLinkedin,
  faMastodon,
  faMedium,
  faPinterest,
  faReddit,
  faSlack,
  faSlideshare,
  faSnapchat,
  faSoundcloud,
  faStackOverflow,
  faTelegram,
  faTumblr,
  faTwitter,
  faVimeo,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

export const SocialFollows = () => {
  const supportedIcons = [
    'behance',
    'codepen',
    'dev',
    'discord',
    'dribbble',
    'facebook',
    'github',
    'gitlab',
    'instagram',
    'linkedin',
    'mastodon',
    'medium',
    'pinterest',
    'reddit',
    'slack',
    'slideshare',
    'snapchat',
    'soundcloud',
    'stack-overflow',
    'telegram',
    'tumblr',
    'twitter',
    'vimeo',
    'youtube',
  ]
  const components = [
    faBehance,
    faCodepen,
    faDev,
    faDiscord,
    faDribbble,
    faFacebook,
    faGithub,
    faGitlab,
    faInstagram,
    faLinkedin,
    faMastodon,
    faMedium,
    faPinterest,
    faReddit,
    faSlack,
    faSlideshare,
    faSnapchat,
    faSoundcloud,
    faStackOverflow,
    faTelegram,
    faTumblr,
    faTwitter,
    faVimeo,
    faYoutube,
  ]

  const { socialFollowLinks: social } = useThemeOptions()

  return (
    social && (
      <Flex justify="center" mb="12">
        {social.map(({ name, url }) => {
          const index = supportedIcons.indexOf(name.toLowerCase())
          return (
            index > -1 && (
              <Link
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow on ${name}`}
                textStyle="linkHoverOpacity"
                p="2"
                mx="1"
                sx={{
                  svg: {
                    fontSize: '2xl',
                    verticalAlign: 'middle',
                  },
                }}
              >
                {<FontAwesomeIcon icon={components[index]} />}
              </Link>
            )
          )
        })}
      </Flex>
    )
  )
}
