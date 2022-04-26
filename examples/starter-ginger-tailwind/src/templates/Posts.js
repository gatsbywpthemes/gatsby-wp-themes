import React from "react";
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo";
import Layout from "~/components/Layout";
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks";
import ArchiveContent from "~/components/archive/ArchiveContent";
export default function Posts({ posts, ctx }) {
  const { humanPageNumber, numberOfPages, title, yoastSeo, seo } = ctx;
  const { postsPath } = useThemeOptions();
  console.log({ posts });
  return (
    <Layout>
      <Seo
        humanPageNumber={humanPageNumber}
        numberOfPages={numberOfPages}
        title={title}
        uri={postsPath}
        yoastSeo={yoastSeo}
        seo={seo}
      />
      <ArchiveContent posts={posts} ctx={ctx} />
    </Layout>
  );
}
