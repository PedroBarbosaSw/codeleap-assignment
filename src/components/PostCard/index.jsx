import './index.css';

import React from 'react';

export default function PostCard(props) {
   return (
      <div className="postcard-ROOT">
         <div className="postcard-content">
            <div className="postcard-content-title">
               <h3>{datatest[0].title}</h3>
            </div>

            <div className="postcard-content-content">
               <h4>{datatest[0].creator}</h4>
               <p>
                  {datatest[0].content}
               </p>
            </div>
         </div>
      </div>
   )
}

const datatest = [
   {
      title: 'My first post',
      creator: '@Pedro',
      time: '25min',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet velit ornare, consequat eros ac, malesuada justo. Nulla lacus orci, faucibus vitae nisi ac, laoreet sagittis nunc. Aliquam ut ipsum ut est iaculis sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec aliquet erat sed rhoncus posuere. In eget odio sapien. Integer eget rutrum magna. Curabitur facilisis nibh semper risus consequat, ac feugiat lectus elementum. Sed rhoncus nisi eu euismod consequat. Morbi rhoncus volutpat sem eu vestibulum. Aliquam vitae suscipit neque. Donec auctor elit eget lectus pretium, eget mattis mauris scelerisque. Vestibulum sit amet nibh a velit sodales aliquet at at massa. Duis ac imperdiet enim.'
   }
]