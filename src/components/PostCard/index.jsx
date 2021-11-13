import './index.css';

import React from 'react';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

import { formatDistanceToNow } from 'date-fns';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removePost, editPost } from '../../actions/postAction';

import Modal from '../Modal';

function PostCard(props) {
   const [open, setOpen] = React.useState(false);
   const [openDelete, setOpenDelete] = React.useState(false);

   const [titleEditItem, setTitleEditIcon] = React.useState(props.post.title)
   const [contentEditItem, setContentEditIcon] = React.useState(props.post.content)

   return (
      <div className="postcard-ROOT">
         <div className="postcard-content">
            <div className="postcard-content-title">
               <h3>{props.post.title}</h3>

               <div className="postcard-content-title-icons">
                  {
                     props.username == props.post.username ? (
                        <>
                              <DeleteForeverIcon 
                                 className="icons" 
                                 style={{marginRight: '20px'}}
                                 onClick={() => setOpenDelete(true)}
                              />
                              <EditIcon 
                                 className="icons" 
                                 onClick={() => setOpen(true)}
                              />
                        </>
                     ) : null
                  }
               </div>
            </div>

            <div className="postcard-content-content">
               <div className="postcard-content-subtitle">
                  <h4>{props.post.username}</h4>
                  <span>{formatDistanceToNow(new Date(props.post.created_datetime), { addSuffix: true }) }</span>
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
                  <button 
                     type="button" 
                     className="button-dialog-delete" 
                     onClick={() => setOpenDelete(false)}
                  >
                     Cancel
                  </button>
                  <button 
                     type="button" 
                     className="button-dialog-delete"
                     style={{marginRight:'15px'}}   
                     onClick={() => props.removePost(props.post.id)}
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
                     <input 
                        value={titleEditItem}
                        onChange={e => setTitleEditIcon(e.target.value)}
                     />

                     <span>Content</span>
                     <textarea 
                        value={contentEditItem}
                        onChange={e => setContentEditIcon(e.target.value)}
                        rows="4" 
                     />

                     <div className="button-dialog-box">
                        <button 
                           type="button" 
                           className="button-dialog"
                           onClick={() => props.editPost({
                              id: props.post.id,
                              title: titleEditItem,
                              content: contentEditItem
                           })}
                        >
                           SAVE
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
      </div>
   )
}

const mapStateToProps = state => ({username: state.posts.username})

const mapDispatchToProps = dispatch => bindActionCreators({ removePost, editPost }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostCard)