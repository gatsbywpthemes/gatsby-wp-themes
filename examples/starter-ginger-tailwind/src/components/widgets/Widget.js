import React from "react";
import SocialFollows from "~/components/social/SocialFollows";
import CategoriesWidget from "./CategoriesWidget";
import Newsletter from "./Newsletter";
import RecentPosts from "./RecentPosts";
import TagsWidget from "./TagsWidget";

export default function Widget({ widget }) {
  switch (widget) {
    case "SocialFollow":
      return <SocialFollows />;
    case "RecentPosts":
      return <RecentPosts />;
    case "Categories":
      return <CategoriesWidget />;
    case "Tags":
      return <TagsWidget />;
    case "Newsletter":
      return process.env.GATSBY_MAILCHIMP_ENDPOINT ? <Newsletter /> : null;
    default:
      return "";
  }
}
