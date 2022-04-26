import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Image({ img, loading = "lazy" }) {
  return (
    !!img && (
      <GatsbyImage
        loading={loading}
        image={img.node.localFile.childImageSharp?.gatsbyImageData}
        alt={img.node.altText}
      />
    )
  );
}
