import axios from 'axios'

const URL = 'https://api.github.com/users/pedrobarbosasw/followers'

export const changeTitle = (event) => ({
   type: 'TITLE_CHANGED',
   payload: event.target.value
})

export const changeContent = (event) => ({
   type: 'CONTENT_CHANGED',
   payload: event.target.value
})

export const getPosts = () => {
   const request = axios.get(URL)
   return {
      type: 'POSTS_GET',
      payload: request
   }
}