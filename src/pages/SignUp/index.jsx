import './index.css';

import React from 'react';

import { Link } from 'react-router-dom';

export default function SignUp() {
   const [username, setUserName] = React.useState();
   return (
      <div className="signup-ROOT">
         <div className="signup-form">
            <div className="signup-form-text">
               <h2>Welcome to CodeLeap network!</h2>

               <h4>Please enter your username</h4>
               <input 
                  value={username}
                  placeholder="John doe"
                  onChange={e => setUserName(e.target.value)}
               />
            </div>

            {
               username ? (
                  <Link to={'/home'} className="signup-link">
                     <button className="button-filled">
                        ENTER
                     </button>
                  </Link>
               ) : (
                  <div className="signup-link">
                     <button className="button-notfilled">
                        ENTER
                     </button>
                  </div>
               )
            }
         </div>
      </div>
   )
}