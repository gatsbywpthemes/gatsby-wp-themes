import React from "react";
import { Link } from "gatsby";
import Image from "~/components/Image";
export default function PostEntryMedia({
  imageLoading = "lazy",
  post: { featuredImage, uri },
}) {
  return (
    !!featuredImage && (
      <Link to={uri} aria-label="View the entire post">
        <Image img={featuredImage} loading={imageLoading} />
      </Link>
    )
  );
}
