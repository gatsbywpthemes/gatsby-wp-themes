import React from "react";
import { Image } from "./ui-components";
import { HeadlineContent } from "./HeadlineContent";

import Slider from "react-slick";
import "./styles/slick.scss";

export const TestimonialsBlock = ({
  cssClass,
  anchorId,
  headline,
  headlineTag,
  content,
  testimonials,
  ...props
}) => {
  const slides = testimonials?.length > 3 ? 3 : testimonials?.length;
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
        {testimonials &&
          testimonials.map((quote, index) => {
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
