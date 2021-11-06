import './index.css';

import React from 'react';

export default function SignUp() {
   const [username, setUserName] = React.useState();
   return (
      <div className="signup-root">
         <div className="signup-form">
            <h2>Welcome to CodeLeap network!</h2>

            <h4>Please enter your username</h4>
            
         </div>
      </div>
   )
}