import React from "react"
import { graphql } from "gatsby"
import { Button } from "./ui-components"
import { HeadlineContent } from "./HeadlineContent"
import { Tooltip } from "react-tippy"

export const fragment = graphql`
  fragment pricingBlock on WpPage_Layoutblocks_Blocks_PricingBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    tables {
      cssClass
      price
      productId
      title
      description
      features {
        description
        feature
      }
    }
  }
`

const PricingBlock = ({
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
              table
            return (
              <div
                className={`pricing-table ${cssClass ? cssClass : ""}`}
                key={index}
              >
                <Tooltip title={description} arrow distance={15}>
                  <div className="title">{title}</div>
                </Tooltip>
                <div className="price">{price}</div>

                <div className="features">
                  {features &&
                    features.map((feature, index) => {
                      const { description, feature } = feature
                      return (
                        <div className="feature-container" key={index}>
                          <Tooltip title={description} arrow distance={15}>
                            <div className="feature">{feature}</div>
                          </Tooltip>
                        </div>
                      )
                    })}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default PricingBlock
