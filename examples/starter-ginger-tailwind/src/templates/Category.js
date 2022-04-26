import React from "react";
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo";
import Layout from "~/components/Layout";
import ArchiveContent from "~/components/archive/ArchiveContent";
export default function Category({ category, ctx }) {
  const { name, posts, uri, description } = category;
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
          posts={posts}
          ctx={ctx}
        />
      </Layout>
    </>
  );
}
