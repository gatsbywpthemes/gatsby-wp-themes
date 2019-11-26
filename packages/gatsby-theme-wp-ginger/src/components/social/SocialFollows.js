/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import useSiteMetadata from 'gatsby-theme-blog-data/src/hooks/useSiteMetadata'
import {
  FaBehance,
  FaCodepen,
  FaFacebook,
  FaGithub,
  FaGitlab,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

const SocialFollows = () => {
  const supportedIcons = [
    'behance',
    'codepen',
    'facebook',
    'github',
    'gitlab',
    'instagram',
    'linkedin',
    'twitter',
    'youtube',
  ]
  const components = [
    FaBehance,
    FaCodepen,
    FaFacebook,
    FaGithub,
    FaGitlab,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
  ]

  const { social } = useSiteMetadata()

  return (
    <>
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
    </>
  )
}

export default SocialFollows
