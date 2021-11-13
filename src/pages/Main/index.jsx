import './index.css'

import React from 'react';

import Header from '../../components/Header';
import PostCard from '../../components/PostCard';

import axios from 'axios';

import { changeTitle, changeContent, changePosts} from '../../actions/postAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function Main(props) {
   const posts = props.posts || []

   React.useEffect(() => {
      axios.get('https://dev.codeleap.co.uk/careers/')
      .then(res => props.changePosts(res))
   }, [])

   console.log(posts)

   return (
      <div className="main-ROOT">
         <Header />

         <div className="main-content">
            <div className="main-form">
               <div className="main-form-content">
                  <div className="main-form-input">
                     <h3>What's on your mind?</h3>
                     <span>Title</span>
                     <input 
                        value={props.title}
                        placeholder="Hello world"
                        onChange={e => props.changeTitle(e)}
                     />

                     <span>Content</span>
                     <textarea 
                        value={props.content}
                        placeholder="Hello world"
                        rows="4"
                        onChange={e => props.changeContent(e)}
                     />
                  </div>

                  <button type="button"

                  >
                     CREATE
                  </button>
               </div>
            </div>

            <div className="main-posts">
               <ul>
                  {
                     posts?.map(currentPost => (
                        <li style={{margin: '25px 0'}} key={currentPost.id}>
                           <PostCard post={currentPost} />
                        </li>
                     ))
                  }
               </ul>
            </div>
         </div>

      </div>
   )
}

const mapStateToProps = state => (
   {
      posts: state.posts.posts, 
      title: state.posts.title,
      content: state.posts.content
   }
)

const mapDispatchToProps = dispatch =>
   bindActionCreators({ changeTitle, changeContent, changePosts }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)