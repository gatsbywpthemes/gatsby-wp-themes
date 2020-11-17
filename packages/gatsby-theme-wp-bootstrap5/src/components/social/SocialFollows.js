import React from 'react'
import { useSiteMetaData } from 'gatsby-theme-blog-data/src/hooks'
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

  const { social } = useSiteMetaData()

  return (
    <div className="d-flex justify-content-center mb-4">
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
                className="mx-2 h5 text-reset"
              >
                {<FontAwesomeIcon icon={components[index]} />}
              </a>
            )
          } else {
            return null
          }
        })}
    </div>
  )
}
