import React from "react";
import Layout from "~/components/Layout";
import PostEntryFull from "~/components/post/PostEntryFull";
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo";
export default function Post(props) {
  const { post, ctx } = props;
  const featuredImage =
    post.featuredImage?.node.localFile.childImageSharp?.original;
  return (
    <Layout useContainer={false}>
      <Seo
        featuredImage={
          featuredImage && {
            src: featuredImage.src,
            width: featuredImage.width,
            height: featuredImage.height,
          }
        }
        title={post.title}
        uri={post.uri}
        yoastSeo={ctx.yoastSeo}
        seo={ctx.seo}
      />
      <main>
        <PostEntryFull {...props} />
      </main>
    </Layout>
  );
}
