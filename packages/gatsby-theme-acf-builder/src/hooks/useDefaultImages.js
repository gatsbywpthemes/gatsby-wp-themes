import { graphql, useStaticQuery } from "gatsby";

export const useDefaultImages = () => {
  const data = useStaticQuery(graphql`
    query {
      wp {
        themeOptions {
          defaultImages {
            projectImage {
              ...basicImage
            }
            postImage {
              ...basicImage
            }
          }
        }
      }
    }
  `);

  const postDefaultImage = data.wp.themeOptions.defaultImages.postImage;

  const projectDefaultImage = data.wp.themeOptions.defaultImages.projectImage;

  return {
    postDefaultImage,
    projectDefaultImage,
  };
};
