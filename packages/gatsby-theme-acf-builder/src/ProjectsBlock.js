import React from "react";
import { HeadlineContent } from "./HeadlineContent";
import { Image } from "./ui-components";
import { Link, graphql, useStaticQuery } from "gatsby";

export const ProjectsBlock = ({
  cssClass,
  anchorId,
  content,
  headline,
  headlineTag,
  projects,
  allProjects,
  ...props
}) => {
  const data = useStaticQuery(graphql`
    query {
      wp {
        themeOptions {
          defaultImages {
            projectImage {
              ...basicImage
            }
          }
        }
      }
    }
  `);

  const defaultImage = data.wp.themeOptions.defaultImages.projectImage;
  return (
    <section
      className={`projects-block ${cssClass ? cssClass : ""}`}
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
      <div className="projects">
        {projects?.map((project) => {
          const {
            id,
            title,
            uri,
            projectFields: { projectUrl, projectShortDescription },
            featuredImage,
            tags,
          } = project;
          const image = featuredImage ? featuredImage.node : defaultImage;
          return (
            <div className="project" key={id}>
              <Link to={uri}>
                {featuredImage && (
                  <Image
                    img={image}
                    className="project-image-container"
                    imgClassName="project-image"
                  />
                )}
                <h3 className="headline">{title}</h3>

                {tags?.nodes?.length > 0 && (
                  <div className="tags">
                    {tags.nodes.map((tag, index) => (
                      <div className="tag" key={tag.id}>
                        {tag.name}
                        {tags.nodes.length !== index + 1 && (
                          <span className="separator">.</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                <div className="project-description">
                  {projectShortDescription}
                </div>
              </Link>
              <div className="button-container">
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                >
                  View demo
                </a>
              </div>
            </div>
          );
        })}
      </div>
      {allProjects && (
        <div className="button-container">
          <Link className="button" to={allProjects.url}>
            {allProjects.title}
          </Link>
        </div>
      )}
    </section>
  );
};
