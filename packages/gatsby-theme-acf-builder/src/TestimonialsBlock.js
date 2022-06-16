import React from "react";
import { graphql } from "gatsby";
import { Image } from "./ui-components";
import { HeadlineContent } from "./HeadlineContent";

import Slider from "react-slick";
import "./styles/slick.scss";

export const fragment = graphql`
  fragment testimonialsBlock on WpPage_Layoutblocks_Blocks_TestimonialsBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    quotesItems {
      author
      position
      content
      picture {
        ...basicImage
      }
    }
  }
`;

export const TestimonialsBlock = ({
  cssClass,
  anchorId,
  headline,
  headlineTag,
  content,
  quotesItems,
  ...props
}) => {
  const slides = quotesItems.length > 3 ? 3 : quotesItems.length;
  const sliderSettings = {
    slidesToShow: slides,
    slidesToScroll: slides,
    autoplay: true,
    arrows: false,
  };
  return (
    <section
      className={`testimonials-block ${cssClass ? cssClass : ""}`}
      id={`${anchorId ? anchorId : ""}`}
      {...props}
    >
      {(headline || content) && (
        <HeadlineContent
          headline={headline}
          content={content}
          headlineTag={headlineTag}
        />
      )}
      <Slider {...sliderSettings}>
        {quotesItems &&
          quotesItems.map((quote, index) => {
            const { author, position, picture, content } = quote;
            return (
              <div className="testimonial" key={index}>
                {picture && (
                  <Image
                    img={picture}
                    className="author-pic-container"
                    imgClassName="author-pic"
                  />
                )}
                <div
                  className="testimonial-content"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
                <div className="author">
                  <div className="author-name">{author}</div>
                  <div className="author-position">{position}</div>
                </div>
              </div>
            );
          })}
      </Slider>
    </section>
  );
};
