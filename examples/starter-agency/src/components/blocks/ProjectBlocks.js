import React from "react"
import {
  ContentBlock,
  SectionsBlock,
  CoverBlock,
  FeaturesBlock,
  AccordionBlock,
  TestimonialsBlock,
  PricingBlock,
  ProjectsBlock,
  SpacerBlock,
  LogosBlock,
  LastsPostsBlock,
  GalleryBlock,
  TeamBlock,
} from "@gatsbywpthemes/gatsby-theme-acf-builder/src"

export const ProjectBlocks = ({ blocks }) => {
  return (
    <div>
      {blocks?.length > 0 &&
        blocks.map((block, index) => {
          let blockRef = { ...block, key: index }
          switch (block.__typename) {
            case "WpProject_Layoutblocks_Blocks_ContentBlock":
              return <ContentBlock {...blockRef} />
            case "WpProject_Layoutblocks_Blocks_SectionsBlock":
              return <SectionsBlock {...blockRef} />
            case "WpProject_Layoutblocks_Blocks_CoverBlock":
              return <CoverBlock {...blockRef} />
            case "WpProject_Layoutblocks_Blocks_FeaturesBlock":
              return <FeaturesBlock {...blockRef} />
            case "WpProject_Layoutblocks_Blocks_AccordionBlock":
              return <AccordionBlock {...blockRef} />
            case "WpProject_Layoutblocks_Blocks_TestimonialsBlock":
              return <TestimonialsBlock {...blockRef} />
            case "WpProject_Layoutblocks_Blocks_PricingBlock":
              return <PricingBlock {...blockRef} />
            case "WpProject_Layoutblocks_Blocks_ProjectsBlock":
              return <ProjectsBlock {...blockRef} />
            case "WpProject_Layoutblocks_Blocks_SpacerBlock":
              return <SpacerBlock {...blockRef} />
            case "WpProject_Layoutblocks_Blocks_LogosBlock":
              return <LogosBlock {...blockRef} />
            case "WpProject_Layoutblocks_Blocks_LastsPostsBlock":
              return <LastsPostsBlock {...blockRef} />
            case "WpProject_Layoutblocks_Blocks_GalleryBlock":
              return <GalleryBlock {...blockRef} />
            case "WpProject_Layoutblocks_Blocks_TeamBlock":
              return <TeamBlock {...blockRef} />
            default:
              return null
          }
        })}
    </div>
  )
}
