import React from "react";
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo";
import Layout from "~/components/Layout";
import ActivatePrismaScripts from "~/utils/ActivatePrismaScripts";
import ParsedContent from "~/utils/ParsedContent";

const Page = (props) => {
  const { page, ctx } = props;
  const { content, title, uri, headlesswp } = page;
  const skipTitle = headlesswp?.skipTitle || false;
  const featuredImage =
    page.featuredImage?.node.localFile.childImageSharp?.original;
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
      <div className="page-wrapper">
        <article className="page-content">
          {!skipTitle && (
            <h1 className="h1Archive">
              <span
                className="page-title-value"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </h1>
          )}
          <ParsedContent content={content} />
          <ActivatePrismaScripts />
        </article>
      </div>
    </Layout>
  );
};

export default Page;
