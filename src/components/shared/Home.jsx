import React, { useState } from "react"
import { Grid, Button } from "semantic-ui-react"

import PostList from "./PostList"
import CreatePostForm from "./CreatePostForm"

const dataFromHome = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2020-03-27T11:00:00+00:00",
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
    date: "2020-03-28T14:00:00+00:00",
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

  const handleClick = () => setIsOpen(!isOpen)

  return (
    <Grid>
      <Grid.Column width={10}>
        <PostList posts={posts} />
      </Grid.Column>

      <Grid.Column width={6}>
        <Button style={{marginTop: 40}} positive onClick={handleClick}>Create post</Button>
        {isOpen && <CreatePostForm closeForm={handleClick} />}
      </Grid.Column>  
    </Grid>
  )
}
