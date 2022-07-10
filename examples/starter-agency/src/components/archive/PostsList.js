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
      className={clsx("posts-list", "grid gap-10 sm:grid-cols-2")}
      {...props}
    >
      {posts?.nodes?.map((post) => {
        const { id, title, uri, excerpt, featuredImage } = post
        const image = featuredImage ? featuredImage.node : defaultImage
        return (
          <div className="md:-mb-24 post" key={id}>
            <Link to={uri}>
              <div className="post-image-container md:rounded-md rounded-t-md aspect-w-16 aspect-h-9 ">
                <Image
                  img={image}
                  className={clsx(
                    "post-image",
                    // "hover:scale-110",
                    // "!transition !duration-1000",
                    "md:rounded-md md:shadow-md rounded-t-md ",
                    "object-cover object-top "
                  )}
                />
              </div>
              <div
                className={clsx(
                  "post-content",
                  "text-center",
                  "transition duration-500",
                  "md:bg-neutral-50 bg-neutral-100 rounded-b-md  mx-auto md:max-w-[300px] xl:max-w-[500px] md:rounded-md py-8 px-10 md:shadow-md md:hover:shadow-xl",

                  "md:relative md:-top-24"
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
