import React from "react";
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo";
import Layout from "~/components/Layout";
import parser from "html-react-parser";

const Page = (props) => {
  const { page, ctx } = props;
  const { content, title, uri, headlesswp } = page;
  const skipTitle = headlesswp?.skipTitle || false;
  const featuredImage =
    page.featuredImage?.node.localFile.childImageSharp?.original;
  console.log({ content });
  return (
    <Layout>
      <Seo
        isFrontPage={page.isFrontPage}
        title={title}
        uri={uri}
        yoastSeo={ctx.yoastSeo}
        seo={ctx.seo}
        featuredImage={
          featuredImage && {
            src: featuredImage.src,
            width: featuredImage.width,
            height: featuredImage.height,
          }
        }
      />
      {/* <article>{parser(content)}</article> */}
      <article
        className="page-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {/* <main>
        <article data-sal="fade" data-sal-duration="600" data-sal-easing="ease">
          {!skipTitle && (
            <Box as="h1" textStyle="h1Archive">
              <span
                className="page-title-value"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Box>
          )}
          <Box className="entry-content" sx={gutenbergStyles({ colorMode })}>
            <ActivatePageScripts />
            <ParsedContent content={content} />
          </Box>
        </article>
      </main> */}
    </Layout>
  );
};

export default Page;
