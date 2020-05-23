import React, { Component, Fragment } from 'react';
import { Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import AuthPage from './AuthPage' 
import HomePage from './HomePage'
import Login from './Login'
import Nav from './Nav'
import ViewPoll from './ViewPoll'
import VoteQuestionPage from './VoteQuestionPage'
import LeaderBoard from './LeaderBoard'
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
                  { /* <Switch>
                        <Route exact path="/" component={ Login } />
                        <Route path="/home" component={ HomePage } />
                        <Route path="/leaderboard" component={ LeaderBoard } />
                        <Route path="/question/:question_id" component={ VoteQuestionPage } />
                        <Route path="/viewpoll/:question_id" component={ ViewPoll } />
                      </Switch> */ }
                      
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