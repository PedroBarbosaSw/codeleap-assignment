const INITIAL_STATE = {
   // form: {
   //    title: '',
   //    content: ''
   // },
   title: '',
   content: '',
   posts: []
}

export default (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case 'POSTS_GET':
         return { ...state, posts: action.payload.data}
      case 'TITLE_CHANGED':
         return { ...state, title: action.payload}
      case 'CONTENT_CHANGED':
         return { ...state, content: action.payload}
      default:
         return state
   }
}