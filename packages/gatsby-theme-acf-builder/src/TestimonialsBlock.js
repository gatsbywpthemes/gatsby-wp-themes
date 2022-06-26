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
  slidesPerView,
  ...props
}) => {
  const slides =
    testimonials?.length > slidesPerView ? slidesPerView : testimonials?.length;
  const sliderSettings = {
    slidesToShow: slides,
    slidesToScroll: slides,
    speed: 2000,
    autoPlaySpeed: 10000,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
                  <div className="header">
                    <Image
                      img={picture}
                      className="author-pic-container"
                      imgClassName="author-pic"
                    />
                  </div>
                )}
                <div className="body">
                  <div
                    className="testimonial-content"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                  <div className="author">
                    <div className="author-name">{author}</div>
                    <div className="author-position">{position}</div>
                  </div>
                </div>
              </div>
            );
          })}
      </Slider>
    </section>
  );
};
