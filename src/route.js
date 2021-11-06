import React from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route
} from 'react-router-dom';

import Main from './pages/Main';
import SignUp from './pages/SignUp';
import PrivateRoute from './components/PrivateRoute';

export default function RouteComponent() {
   return (
      <Router>
         <Switch>
            <PrivateRoute path="/home">
               <Main />
            </PrivateRoute>
            <Route path="/">
               <SignUp />
            </Route>
         </Switch>
      </Router>
   )
}