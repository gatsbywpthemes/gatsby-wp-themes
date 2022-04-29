import React from "react";
import { TwitterShareButton, TwitterIcon } from "react-share";
import slashes from "remove-trailing-slash";
import { useSiteMetaData } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks";
export default function Twitter({ url, title, children }) {
  const { siteUrl } = useSiteMetaData();
  const shareUrl = `${slashes(siteUrl)}${url}`;
  return children ? (
    <TwitterShareButton url={shareUrl} title={title}>
      {children}
    </TwitterShareButton>
  ) : (
    <TwitterIcon />
  );
}
