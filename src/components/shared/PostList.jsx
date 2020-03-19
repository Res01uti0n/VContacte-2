import React from "react"

import Post from "./Post"

export default function PostList({posts, handleSelectPost, handleDeletePost}) {
  return (
    <>
      {posts.map(
        post => (
          <Post 
            key={post.id} 
            handleSelectPost={handleSelectPost} 
            handleDeletePost={handleDeletePost} 
            post={post} 
          />
        )
      )}
    </>
  )
}
