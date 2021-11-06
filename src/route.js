import React from 'react';
import {
   BrowserRouter as Routes,
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
            <Route path="/">
               <SignUp />
            </Route>
         </Switch>
      </Router>
   )
}