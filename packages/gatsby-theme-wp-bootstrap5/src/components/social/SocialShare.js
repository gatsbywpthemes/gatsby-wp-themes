import React from 'react'
import { Twitter, Facebook, Pinterest, Linkedin } from './icons'

export const SocialShare = ({ url, title, media }) => {
  return (
    <section className="shadow bg-light border p-3 my-4 d-flex justify-content-between align-items-center">
      <h2 className="h5 m-0">Social Share</h2>

      <div className="d-flex h4 m-0">
        <Twitter url={url} title={title}></Twitter>
        <Facebook url={url} quote={title}></Facebook>
        <Pinterest url={url} media={media}></Pinterest>
        <Linkedin url={url}></Linkedin>
      </div>
    </section>
  )
}
