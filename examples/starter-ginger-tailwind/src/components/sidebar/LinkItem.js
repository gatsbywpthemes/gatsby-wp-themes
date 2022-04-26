import React from "react";
import slashes from "remove-trailing-slash";
import { Link } from "gatsby";
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks";
import createLocalLink from "~/utils/createLocalLink";
export default function LinkItem({ menuItem }) {
  const { wordPressUrl } = useThemeOptions();
  let url = menuItem.url;
  if (
    !url.includes(wordPressUrl) &&
    (url.startsWith("https://") || url.startsWith("http://"))
  ) {
    const targetRelAttrs =
      menuItem.target === "_blank"
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};
    return (
      <a className="specialLink" href={url} {...targetRelAttrs}>
        {menuItem.label}
      </a>
    );
  } else {
    return url !== "#" ? (
      url === wordPressUrl ? (
        <Link
          to="/"
          className="specialLink"
          dangerouslySetInnerHTML={{ __html: menuItem.label }}
        />
      ) : (
        <Link
          className="specialLink"
          to={createLocalLink(url, slashes(wordPressUrl))}
          dangerouslySetInnerHTML={{ __html: menuItem.label }}
        />
      )
    ) : (
      <span className="specialLink">{menuItem.label}</span>
    );
  }
}
