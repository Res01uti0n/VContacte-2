import React, { useState } from "react"
import cuid from "cuid"

import { Grid, Button } from "semantic-ui-react"

import PostList from "./PostList"
import CreatePostForm from "./CreatePostForm"

const dataFromHome = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2020-03-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bobe",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/24.jpg",
    like: [
      {
        id: "a",
        name: "Bobe",
        photoURL: "https://randomuser.me/api/portraits/men/24.jpg"
      },
      {
        id: "b",
        name: "Sam",
        photoURL: "https://randomuser.me/api/portraits/women/32.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2020-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/12.jpg",
    like: [
      {
        id: "b",
        name: "Sam",
        photoURL: 'https://randomuser.me/api/portraits/women/32.jpg'
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
]

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [posts, setPosts] = useState(dataFromHome)
  const [selectedPost, setSelectedPost] = useState(null)

  const handleFormOpen = () => {
    setIsOpen(true)
    setSelectedPost(null)
  }

  const handleFormClose = () => {
    setIsOpen(false)
  }

  const handleCreatePost = (newPost) => {
    newPost.id = cuid()
    newPost.hostPhotoURL = "https://randomuser.me/api/portraits/men/20.jpg"
    setPosts([...posts, newPost])
  }

  const handleSelectPost = post => {
    setIsOpen(true)
    setSelectedPost(post)
  }

  const handleUpdatePost = updatedPost => {
    setPosts(posts.map( post => {
      if (post.id === updatedPost.id) {
        return {...updatedPost}
      } else {
        return post
      }
    }))
    setIsOpen(false)
    setSelectedPost(null)
  }

  const handleDeletePost = id => {
    setPosts(posts.filter(post => post.id !== id))
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <PostList posts={posts} handleSelectPost={handleSelectPost} handleDeletePost={handleDeletePost} />
      </Grid.Column>

      <Grid.Column width={6}>
        <Button 
          style={{marginTop: 40}} 
          positive onClick={handleFormOpen}
        >
          Create post
        </Button>
        {isOpen && (
          <CreatePostForm
            key={selectedPost ? selectedPost.id : 0}
            selectedPost={selectedPost}
            handleUpdatePost={handleUpdatePost}
            handleCreatePost={handleCreatePost} 
            closeForm={handleFormClose} 
          />
        )}
      </Grid.Column>  
    </Grid>
  )
}
