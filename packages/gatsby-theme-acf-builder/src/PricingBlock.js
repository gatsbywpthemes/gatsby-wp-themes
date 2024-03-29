import React from "react";
import { HeadlineContent } from "./HeadlineContent";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

export const PricingBlock = ({
  cssClass,
  anchorId,
  headline,
  headlineTag,
  content,
  tables,
  ...props
}) => {
  return (
    <section
      className={`pricing-block ${cssClass ? cssClass : ""}`}
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
      {tables && (
        <div className="tables-container">
          {tables.map((table, index) => {
            const { cssClass, price, productId, title, features, description } =
              table;
            return (
              <div
                className={`pricing-table ${cssClass ? cssClass : ""}`}
                key={index}
              >
                <div className="table-header">
                  <Tooltip title={description} arrow distance={15}>
                    <div className="title">{title}</div>
                  </Tooltip>
                  <div
                    className="price"
                    dangerouslySetInnerHTML={{ __html: price }}
                  />
                </div>

                <div className="table-body">
                  <div className="features">
                    {features &&
                      features.map((item, index) => {
                        const { description, feature } = item;
                        return (
                          <div className="feature-container" key={index}>
                            <Tooltip
                              className="description"
                              title={description}
                              arrow
                              distance={15}
                            >
                              <div className="feature">{feature}</div>
                            </Tooltip>
                          </div>
                        );
                      })}
                  </div>
                  {productId && (
                    <div className="button-container">
                      <button>buy now</button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
