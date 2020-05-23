import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import AuthPage from './AuthPage' 
import Nav from './Nav'
export class App extends Component
{
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  } 
  render() {
      return (
              <Fragment>
                  <Nav />
                  <div>
                    <AuthPage />
                </div>
              </Fragment>
      
    )
  }
}
function mapStateToProps ( { authedUser, users, questions } )
{
    return {
        users,
        questions,
        authedUser,
    }
}
export default connect( mapStateToProps)(App)