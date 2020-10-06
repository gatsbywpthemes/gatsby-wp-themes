import React from 'react'
import { Twitter, Facebook, Pinterest } from './icons'
import { FiShare2 } from 'react-icons/fi'
import { socialStyles } from '../../styles'

export const SocialShare = ({ url, title, media }) => {
  return (
    <>
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
    </>
  )
}
