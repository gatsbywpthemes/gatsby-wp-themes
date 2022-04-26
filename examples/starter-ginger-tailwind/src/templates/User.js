import React from "react";
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo";
import Layout from "~/components/Layout";
import ArchiveContent from "~/components/archive/ArchiveContent";
export default function User({ user, ctx }) {
  const { name, posts, uri, description } = user;
  const { humanPageNumber, numberOfPages, yoastSeo, seo } = ctx;
  return (
    <>
      <Layout>
        <Seo
          title={`Author Archives: ${name}`}
          humanPageNumber={humanPageNumber}
          numberOfPages={numberOfPages}
          uri={uri}
          yoastSeo={yoastSeo}
          seo={seo}
        />
        <ArchiveContent
          name={name}
          text={"Posts by:"}
          posts={posts}
          ctx={ctx}
        />
      </Layout>
    </>
  );
}
