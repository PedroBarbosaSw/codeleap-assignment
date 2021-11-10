import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const portalRoot = document.getElementById('portal-root')

const Modal = ({ id = 'modal', children, isOpen, onClickClose }) => {
   
   const handleOutsideClick = (e) => {
      if(e.target.id === id) onClickClose()
   }

   if(!isOpen) {
      return null
   }

   return ReactDOM.createPortal(
      <div id='modal' className="ui-modal_overlay" onClick={handleOutsideClick}>
         <div className="ui-modal">
            {children}
         </div>
      </div>,
      portalRoot,
   )
}

export default Modal;