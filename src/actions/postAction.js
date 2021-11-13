import axios from 'axios'

const URL = 'https://dev.codeleap.co.uk/careers/'

export const changeTitle = (event) => ({
   type: 'TITLE_CHANGED',
   payload: event.target.value
})

export const changeContent = (event) => ({
   type: 'CONTENT_CHANGED',
   payload: event.target.value
})

export const changePosts = (list) => ({
   type: 'POSTS_CHANGED',
   payload: list
})

export const refreshPosts = () => {
   const request = axios.get(URL)
   return {
      type: 'POSTS_REFRESH',
      payload: request
   }
}

export const addPost = (post) => {
   return dispatch => {
      axios.post(URL, { username: post.username, title: post.title, content: post.content })
         .then(res => dispatch({ type: 'POST_ADDED', payload: res.data.results }))
         .then(res => dispatch(refreshPosts()))
   }
}