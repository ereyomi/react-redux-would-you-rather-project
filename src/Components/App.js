import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

import AuthPage from './AuthPage'
export class App extends Component
{
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
      return (
          <Router>
            <Fragment>
                    <Route exact to="/" component={ AuthPage } />
            </Fragment>
        </Router>
      
    )
  }
}
function mapStateToProps ( { authedUser } )
{
    return {
        authedUser: authedUser ? authedUser : null
    }
}
export default connect( mapStateToProps)(App)