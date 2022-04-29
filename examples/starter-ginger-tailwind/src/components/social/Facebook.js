import React from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";
import slashes from "remove-trailing-slash";
import { useSiteMetaData } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks";
export default function Facebook({ url, title, children }) {
  const { siteUrl } = useSiteMetaData();
  const shareUrl = `${slashes(siteUrl)}${url}`;
  return children ? (
    <FacebookShareButton url={shareUrl} quote={title}>
      {children}
    </FacebookShareButton>
  ) : (
    <FacebookIcon />
  );
}
