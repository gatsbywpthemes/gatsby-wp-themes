import React from "react";
import { LinkedinShareButton, LinkedinIcon } from "react-share";
import slashes from "remove-trailing-slash";
import { useSiteMetaData } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks";
export default function Linkedin({ url, children }) {
  const { siteUrl } = useSiteMetaData();
  const shareUrl = `${slashes(siteUrl)}${url}`;
  return children ? (
    <LinkedinShareButton url={shareUrl}>{children}</LinkedinShareButton>
  ) : (
    <LinkedinIcon />
  );
}
