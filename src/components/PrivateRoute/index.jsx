import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

const PrivateRoute = props => {
   const isLogged = props.username
   return isLogged ? <Route { ...props } /> : <Redirect to="/" />
}

const mapStateToProps = state => ({username: state.posts.username})

export default connect(mapStateToProps)(PrivateRoute)