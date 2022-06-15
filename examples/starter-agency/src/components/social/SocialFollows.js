import React from "react"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-wp-data/src/hooks"
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
} from "react-icons/fa"

export const SocialFollows = ({ iconClassName = "", ...props }) => {
  const supportedIcons = [
    "behance",
    "codepen",
    "dev",
    "discord",
    "dribbble",
    "facebook",
    "github",
    "gitlab",
    "instagram",
    "linkedin",
    "mastodon",
    "medium",
    "pinterest",
    "reddit",
    "slack",
    "slideshare",
    "snapchat",
    "soundcloud",
    "stack-overflow",
    "telegram",
    "tumblr",
    "twitter",
    "vimeo",
    "youtube",
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

  const { socialFollowLinks: social } = useThemeOptions()

  return (
    <div {...props}>
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
                {<Component className={`${iconClassName}`} />}
              </a>
            )
          } else {
            return null
          }
        })}
    </div>
  )
}
