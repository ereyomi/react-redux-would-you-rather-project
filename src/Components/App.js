import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
/* import AuthPage from './AuthPage' */
import Home from './Home'
import Nav from './Nav'
import ViewPoll from './ViewPoll'
export class App extends Component
{
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  } 
  render() {
      return (
          <Router>
              <Fragment>
                  <Nav />
                    <div>
                          <Route exact path="/" component={ Home } />
                      <Route path="/view/poll/:uid/:qid" component={ ViewPoll } />
                    </div>
              </Fragment>
        </Router>
      
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