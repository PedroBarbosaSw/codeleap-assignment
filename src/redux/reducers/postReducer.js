const INITIAL_STATE = {
   username: '',
   title: '',
   content: '',
   posts: []
}

export default (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case 'POSTS_CHANGED':
         return { ...state, posts: action.payload.data.results}
      case 'TITLE_CHANGED':
         return { ...state, title: action.payload}
      case 'CONTENT_CHANGED':
         return { ...state, content: action.payload}
      case 'POSTS_REFRESH':
         return { ...state, posts: action.payload.data.results}
      case 'POST_ADDED':
         return { ...state, title: '', content: ''}
      case 'CHANGE_USERNAME':
         return { ...state, username: action.payload}
      default:
         return state
   }
}