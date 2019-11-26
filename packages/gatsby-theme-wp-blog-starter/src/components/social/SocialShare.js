/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from 'theme-ui'
import Twitter from './icons/Twitter'
import Facebook from './icons/Facebook'
// import Linkedin from './icons/Linkedin'
import Pinterest from './icons/Pinterest'
import { FiShare2 } from 'react-icons/fi'
import socialStyles from '../../styles/socialStyles'

const SocialShare = ({ url, title, media }) => {
  return (
    <Fragment>
      <span
        sx={{
          ...socialStyles.share.icon,
          mt: `m`,
          mb: `xs`,
        }}
      >
        <FiShare2 />
      </span>

      <div
        sx={{
          ...socialStyles.share.name,
          mb: `l`,
        }}
      >
        <Twitter url={url} title={title}>
          Twitter
        </Twitter>
        /
        <Facebook url={url} quote={title}>
          Facebook
        </Facebook>
        /
        <Pinterest url={url} media={media}>
          Pinterest
        </Pinterest>
      </div>
    </Fragment>
  )
}

export default SocialShare
