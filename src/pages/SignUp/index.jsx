import './index.css';

import React from 'react';

import { Link } from 'react-router-dom';

import { changeUsername } from '../../actions/postAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function SignUp(props) {
   return (
      <div className="signup-ROOT">
         <div className="signup-form">
            <div className="signup-form-text">
               <h2>Welcome to CodeLeap network!</h2>

               <h4>Please enter your username</h4>
               <input 
                  value={props.username}
                  placeholder="John doe"
                  onChange={e => props.changeUsername(e.target.value)}
               />
            </div>

            {
               props.username ? (
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

const mapStateToProps = state => (
   {
      username: state.posts.username
   }
)

const mapDispatchToProps = dispatch =>
   bindActionCreators({ changeUsername }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)