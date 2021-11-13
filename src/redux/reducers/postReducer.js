const INITIAL_STATE = {
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
      default:
         return state
   }
}