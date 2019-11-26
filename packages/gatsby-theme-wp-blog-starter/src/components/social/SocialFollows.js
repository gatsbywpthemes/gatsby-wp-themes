/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
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
    <Box className="widget widget-socialFollow">
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
          }
        })}
    </Box>
  )
}

export default SocialFollows
