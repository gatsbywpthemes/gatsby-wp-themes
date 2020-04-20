/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import useSiteMetadata from 'gatsby-theme-blog-data/src/hooks/useSiteMetadata'
import { follow } from '../../styles/social'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

  const { social } = useSiteMetadata()

  return (
    <Flex sx={follow}>
      {social &&
        social.map(({ name, url }) => {
          const index = supportedIcons.indexOf(name.toLowerCase())
          if (index > -1) {
            return (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow on ${name}`}
              >
                {<FontAwesomeIcon icon={components[index]} />}
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
