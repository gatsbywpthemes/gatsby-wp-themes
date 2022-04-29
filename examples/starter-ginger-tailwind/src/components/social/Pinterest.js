import React from "react";
import { PinterestShareButton, PinterestIcon } from "react-share";
import slashes from "remove-trailing-slash";
import { useSiteMetaData } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks";
export default function Pinterest({ url, media, title, children }) {
  const { siteUrl } = useSiteMetaData();
  const shareUrl = `${slashes(siteUrl)}${url}`;
  const shareMedia = `${slashes(siteUrl)}${media}`;

  return children ? (
    <PinterestShareButton url={shareUrl} media={shareMedia} description={title}>
      {children}
    </PinterestShareButton>
  ) : (
    <PinterestIcon />
  );
}
