import { createReducer } from "../utils/reducerUtils"
import { CREATE_POST, DELETE_POST, UPDATE_POST } from "../actions/postConstants"

const intialState = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2020-03-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    postedBy: "Bobe",
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
    postedBy: "Tom",
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

const createPost = (state, payload) => {
  return [...state, payload.post]
}

const updatePost = (state, payload) => {
  return [...state.filter( post => post.id !== payload.post.id), payload.post]
}

const deletePost = (state, payload) => {
  return [...state.filter(post => post.id !== payload.postd)]
}

export default createReducer(intialState, {
  [UPDATE_POST]: updatePost,
  [CREATE_POST]: createPost,
  [DELETE_POST]: deletePost,
})

