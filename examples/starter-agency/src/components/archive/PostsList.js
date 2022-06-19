import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Image } from "~/components/ui-components/Image"
import clsx from "clsx"

export const PostsList = ({ posts, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      wp {
        themeOptions {
          defaultImages {
            postImage {
              ...basicImage
            }
          }
        }
      }
    }
  `)
  const defaultImage = data.wp.themeOptions.defaultImages.postImage

  return (
    <div
      className={clsx(
        "posts-list",
        // "center-container",
        "grid gap-10 md:grid-cols-2 xl:grid-cols-2"
      )}
      {...props}
    >
      {posts?.nodes?.map((post) => {
        const { id, title, uri, excerpt, featuredImage } = post
        const image = featuredImage ? featuredImage.node : defaultImage
        return (
          <div className="-mb-24 post" key={id}>
            <Link to={uri}>
              <Image
                img={image}
                className="post-image-container rounded-md aspect-[16/9]"
                imgClassName={clsx(
                  "post-image",
                  "hover:scale-110",
                  "transition duration-1000",
                  "rounded-md shadow-md"
                )}
              />
              <div
                className={clsx(
                  "post-content",
                  "text-center",
                  "transition duration-500",
                  "bg-neutral-50  mx-auto max-w-[300px] sm:max-w-[500px] md:max-w-[300px] xl:max-w-[500px] rounded-md py-8 px-10 shadow-md hover:shadow-xl",

                  "relative -top-24"
                )}
              >
                <h3 className="text-base tracking-wider uppercase transition duration-500 headline sm:mb-2 sm:text-lg hover:text-highlight">
                  {title}
                </h3>
                <div
                  className="excerpt line-clamp-3 xl:line-clamp-4"
                  dangerouslySetInnerHTML={{ __html: excerpt }}
                />
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
