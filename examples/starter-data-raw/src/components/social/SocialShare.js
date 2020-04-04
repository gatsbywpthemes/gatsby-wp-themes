/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from 'theme-ui'
import Twitter from './icons/Twitter'
import Facebook from './icons/Facebook'
// import Linkedin from './icons/Linkedin'
import Pinterest from './icons/Pinterest'
import { FiShare2 } from 'react-icons/fi'

const SocialShare = ({ url, title, media }) => {
  return (
    <Fragment>
      <span>
        <FiShare2 />
      </span>

      <div>
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