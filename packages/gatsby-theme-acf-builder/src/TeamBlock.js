import React from "react";
import { Heading, Button, Image } from "./ui-components";

const TeamBlock = ({
  cssClass,
  anchorId,
  headline,
  headlineTag,
  content,
  team,
  ...props
}) => {
  return (
    <section
      className={`team-block ${cssClass ? cssClass : ""}`}
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
      {team && (
        <div className="team-container">
          {team.map((member, index) => {
            const { cssClass, description, name, position, social, picture } =
              member;
            return (
              <div
                className={`team-member ${cssClass ? cssClass : ""}`}
                key={index}
              >
                {picture && <Image img={picture} className="image-container" />}
                {name && <h3 className="member-name">{name}</h3>}
                {position && <h4 className="position">{position}</h4>}
                {description && (
                  <div className="member-description">{description}</div>
                )}
                {social && (
                  <div className="social-container">
                    {social.map((socialItem, index) => {
                      const { image, url } = socialItem;
                      return (
                        <a
                          key={index}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image img={image} className="image-container" />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
          {/* end of team-member */}
        </div>
      )}
    </section>
  );
};

export default TeamBlock;
