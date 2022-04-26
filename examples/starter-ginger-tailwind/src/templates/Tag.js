import React from "react";
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo";
import Layout from "~/components/Layout";
import ArchiveContent from "~/components/archive/ArchiveContent";
export default function Tag({ tag, ctx }) {
  const { name, posts, uri, description } = tag;
  const { humanPageNumber, numberOfPages, yoastSeo, seo } = ctx;
  return (
    <>
      <Layout>
        <Seo
          title={`${name} Archives`}
          humanPageNumber={humanPageNumber}
          numberOfPages={numberOfPages}
          yoastSeo={yoastSeo}
          seo={seo}
          uri={uri}
        />
        <ArchiveContent
          name={name}
          description={description}
          text={"Posts tagged as:"}
          posts={posts}
          ctx={ctx}
        />
      </Layout>
    </>
  );
}
