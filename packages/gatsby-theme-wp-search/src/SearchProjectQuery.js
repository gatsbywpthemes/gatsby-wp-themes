import React from "react";
import { useSearchQuery } from "./useSearchQuery";
import { SearchResults } from "./SearchResults";
import { LoadMoreButton } from "./LoadMoreButton";
import { SearchWrapperProjects } from "./SearchWrapperProjects";
import { Loading } from "./Loading";

export const SearchProjectQuery = () => {
  const { loading, error, hasNextPage, clickable, loadMore, posts } =
    useSearchQuery("PROJECT");
  if (loading) return <Loading>Searching projects...</Loading>;
  if (error) return <p>Error - {error.message}</p>;
  return (
    <SearchWrapperProjects>
      <SearchResults posts={posts} />
      {hasNextPage && (
        <LoadMoreButton clickable={clickable} loadMore={loadMore} />
      )}
    </SearchWrapperProjects>
  );
};
