import './index.css'

import React from 'react';

import Header from '../../components/Header';
import PostCard from '../../components/PostCard';

import axios from 'axios';

export default function Main() {
   const [title, setTitle] = React.useState();
   const [content, setContent] = React.useState();

   const [posts, setPosts] = React.useState([])

   React.useEffect(function() {
      const URL_GET_POSTS = 'https://dev.codeleap.co.uk/careers/'
      axios.get(URL_GET_POSTS)
      .then(res => setPosts(res.data))
   }, [])

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
                        value={title}
                        placeholder="Hello world"
                        onChange={e => setTitle(e.target.value)}
                     />

                     <span>Content</span>
                     <textarea 
                        value={content}
                        placeholder="Hello world"
                        rows="4"
                        onChange={e => setContent(e.target.value)}
                     />
                  </div>

                  <button type="button">CREATE</button>
               </div>
            </div>

            <div className="main-posts">
               <ul>
                  {
                     posts?.results.map(currentPost => (
                        <li style={{margin: '25px 0'}}>
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