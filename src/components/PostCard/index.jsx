import './index.css';

import React from 'react';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

import Modal from '../Modal';

export default function PostCard(props) {
   const [open, setOpen] = React.useState(false);
   const [openDelete, setOpenDelete] = React.useState(false);

   return (
      <div className="postcard-ROOT">
         <div className="postcard-content">
            <div className="postcard-content-title">
               <h3>{props.post.title}</h3>

               <div className="postcard-content-title-icons">
                  <IconButton onClick={() => setOpenDelete(true)}>
                     <DeleteForeverIcon className="icons" />
                  </IconButton>
                  <IconButton onClick={() => setOpen(true)}>
                     <EditIcon className="icons" />
                  </IconButton>
               </div>
            </div>

            <div className="postcard-content-content">
               <div className="postcard-content-subtitle">
                  <h4>{props.post.username}</h4>
                  {/* <span>{props.post.created_datetime - timestamp}</span> */}
               </div>
               <p>
                  {props.post.content}
               </p>
            </div>
         </div>

         <Modal
            isOpen={openDelete}
            onClickClose={() => setOpenDelete(false)}
         >
            <div className="modal-delete">
               <h3>Are you sure you want to delet this item?</h3>

               <div className="modal-delete-buttons">
                  <button type="button" className="button-dialog-delete" >Cancel</button>
                  <button 
                     type="button" 
                     className="button-dialog-delete"
                     style={{marginRight:'15px'}}   
                  >
                     OK
                  </button>
               </div>
            </div>
         </Modal>

         <Modal 
            isOpen={open} 
            onClickClose={() => setOpen(false)}
         >
            <div className="modal-edit">
               <h3>Edit Item</h3>

               <div className="dialogcontent-edit">
                  <div className="dialog-editbox">
                     <span>Title</span>
                     <input type="text" />

                     <span>Content</span>
                     <textarea rows="4" />

                     <div className="button-dialog-box">
                        <button type="button" className="button-dialog">SAVE</button>
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
      </div>
   )
}