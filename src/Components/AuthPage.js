import React, { Component } from 'react'
import
{
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'
import HomePage from './HomePage'
import Login from './Login'
import ViewPoll from './ViewPoll'
import VoteQuestionPage from './VoteQuestionPage'
import LeaderBoard from './LeaderBoard'
import NewQuestionPage from './NewQuestionPage'


const PrivateRoute = ( { isAuthenticated, component: Component, ...rest } ) => (
    <Route { ...rest } render={ ( props ) => (
        isAuthenticated === true
            ? <Component { ...props } />
            : <Redirect to={ {
                pathname: '/',
                state: { from: props.location }
            } } />
    ) } />
)


export class AuthPage extends Component
{
    state = {
        isAuthenticated: false,
        uid: ''
    }
    render ()
    {
        const { isAuthenticated } = this.props;
        
        return (
            <Switch>               
                <Route exact path="/" component={ Login } />
                <PrivateRoute path="/home" component={ HomePage } isAuthenticated={ isAuthenticated }/>
                <PrivateRoute path="/leaderboard" component={ LeaderBoard } isAuthenticated={ isAuthenticated } />
                <PrivateRoute path="/add" component={ NewQuestionPage } isAuthenticated={ isAuthenticated } />
                <PrivateRoute path="/question/:question_id" component={ VoteQuestionPage } isAuthenticated={ isAuthenticated }/>
                <PrivateRoute path="/viewpoll/:question_id" component={ ViewPoll } isAuthenticated={ isAuthenticated }/>
            </Switch>
        )
    }
}
function mapStateToProps ( { authedUser } )
{
    return {
        authedUser,
        isAuthenticated: authedUser ? true : false
    }
}
export default connect( mapStateToProps)(AuthPage)
