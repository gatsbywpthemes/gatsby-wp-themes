import React from 'react'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { Sidebar } from '../index'
import { ArchiveTitle, PostsList, Pagination } from './index'

export const ArchiveContent = ({ posts, ctx, paginationPrefix, name }) => {
  const { layoutWidth, archiveSidebar, sidebarWidgets } = useThemeOptions()

  return (
    <div className="mainContainer">
      {name && <ArchiveTitle text="Posts from: " name={name} />}
      <div>
        <PostsList posts={posts} />
        {archiveSidebar && <Sidebar widgets={sidebarWidgets} />}
      </div>
      <Pagination ctx={ctx} />
    </div>
  )
}
