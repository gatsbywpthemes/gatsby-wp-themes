import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export const Image = ({ img, loading = "lazy", ...props }) => {
  return img?.gatsbyImage ? (
    <GatsbyImage
      loading={loading}
      image={img?.gatsbyImage}
      alt={img.altText}
      {...props}
    />
  ) : (
    //Case of svgs
    <img src={img?.localFile?.publicURL} alt={img?.altText} {...props} />
  );
};
