import './index.css';

import React from 'react';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

export default function PostCard(props) {
   return (
      <div className="postcard-ROOT">
         <div className="postcard-content">
            <div className="postcard-content-title">
               <h3>{datatest[0].title}</h3>

               <div className="postcard-content-title-icons">
                  <IconButton>
                     <DeleteForeverIcon className="icons" />
                  </IconButton>
                  <IconButton>
                     <EditIcon className="icons" />
                  </IconButton>
               </div>
            </div>

            <div className="postcard-content-content">
               <div className="postcard-content-subtitle">
                  <h4>{datatest[0].creator}</h4>
                  <span>{datatest[0].time}</span>
               </div>
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
      time: '25 minutes ago',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet velit ornare, consequat eros ac, malesuada justo. Nulla lacus orci, faucibus vitae nisi ac, laoreet sagittis nunc. Aliquam ut ipsum ut est iaculis sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec aliquet erat sed rhoncus posuere. In eget odio sapien. Integer eget rutrum magna. Curabitur facilisis nibh semper risus consequat, ac feugiat lectus elementum. Sed rhoncus nisi eu euismod consequat. Morbi rhoncus volutpat sem eu vestibulum. Aliquam vitae suscipit neque. Donec auctor elit eget lectus pretium, eget mattis mauris scelerisque. Vestibulum sit amet nibh a velit sodales aliquet at at massa. Duis ac imperdiet enim.'
   }
]