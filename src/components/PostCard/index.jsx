import './index.css';

import React from 'react';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

import Card from '../PostCard';
import Modal from '../Modal';

export default function PostCard(props) {
   const [open, setOpen] = React.useState(false);
   const [openDelete, setOpenDelete] = React.useState(false);

   // const handleClickDeleteOpen = () => setOpenDelete(true);
   // const handleClickDeleteClose = () => setOpenDelete(false);

   // const [openEdit, setOpenEdit] = React.useState(false);
   // const handleClickEditOpen = () => setOpenEdit(true);
   // const handleClickEditClose = () => setOpenEdit(false);

   return (
      <div className="postcard-ROOT">
         <div className="postcard-content">
            <div className="postcard-content-title">
               <h3>{datatest[0].title}</h3>

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
                  <h4>{datatest[0].creator}</h4>
                  <span>{datatest[0].time}</span>
               </div>
               <p>
                  {datatest[0].content}
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
                  >OK</button>
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

const datatest = [
   {
      title: 'My first post',
      creator: '@Pedro',
      time: '25 minutes ago',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet velit ornare, consequat eros ac, malesuada justo. Nulla lacus orci, faucibus vitae nisi ac, laoreet sagittis nunc. Aliquam ut ipsum ut est iaculis sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec aliquet erat sed rhoncus posuere. In eget odio sapien. Integer eget rutrum magna. Curabitur facilisis nibh semper risus consequat, ac feugiat lectus elementum. Sed rhoncus nisi eu euismod consequat. Morbi rhoncus volutpat sem eu vestibulum. Aliquam vitae suscipit neque. Donec auctor elit eget lectus pretium, eget mattis mauris scelerisque. Vestibulum sit amet nibh a velit sodales aliquet at at massa. Duis ac imperdiet enim.'
   }
]