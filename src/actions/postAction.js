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

export const changePosts = (list) => {
   return {
      type: 'POSTS_CHANGED',
      payload: list
   }
}