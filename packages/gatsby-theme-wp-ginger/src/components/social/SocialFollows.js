/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import useSiteMetadata from 'gatsby-theme-blog-data/src/hooks/useSiteMetadata'
import { follow } from '../../styles/social'
import {
  FaBehance,
  FaCodepen,
  FaDev,
  FaDiscord,
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaGitlab,
  FaInstagram,
  FaLinkedin,
  FaMastodon,
  FaMedium,
  FaPinterest,
  FaReddit,
  FaSlack,
  FaSlideshare,
  FaSnapchat,
  FaSoundcloud,
  FaStackOverflow,
  FaTelegram,
  FaTumblr,
  FaTwitter,
  FaVimeo,
  FaYoutube,
} from 'react-icons/fa'

const SocialFollows = () => {
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
    'stackoverflow',
    'telegram',
    'tumblr',
    'twitter',
    'vimeo',
    'youtube',
  ]
  const components = [
    FaBehance,
    FaCodepen,
    FaDev,
    FaDiscord,
    FaDribbble,
    FaFacebook,
    FaGithub,
    FaGitlab,
    FaInstagram,
    FaLinkedin,
    FaMastodon,
    FaMedium,
    FaPinterest,
    FaReddit,
    FaSlack,
    FaSlideshare,
    FaSnapchat,
    FaSoundcloud,
    FaStackOverflow,
    FaTelegram,
    FaTumblr,
    FaTwitter,
    FaVimeo,
    FaYoutube,
  ]

  const { social } = useSiteMetadata()

  return (
    <Flex sx={follow}>
      {social &&
        social.map(({ name, url }) => {
          const index = supportedIcons.indexOf(name.toLowerCase())
          if (index > -1) {
            const Component = components[index]
            return (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow on ${name}`}
              >
                {<Component />}
              </a>
            )
          } else {
            return null
          }
        })}
    </Flex>
  )
}

export default SocialFollows
