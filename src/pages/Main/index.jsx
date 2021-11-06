import './index.css'

import React from 'react';

import Header from '../../components/Header';
import PostCard from '../../components/PostCard';

export default function Main() {
   const [title, setTitle] = React.useState();
   const [content, setContent] = React.useState();

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
                     <input 
                        value={content}
                        placeholder="Hello world"
                        onChange={e => setContent(e.target.value)}
                     />
                  </div>

                  <button type="button">CREATE</button>
               </div>
            </div>

            
         </div>

      </div>
   )
}