import React, { Component } from 'react'
import
{
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login'
import Home from './Home'
import { unsetAuthedUser } from '../actions/authedUser'

const PrivateRoute = ( { isAuthenticated, component: Component, ...rest } ) => (
    <Route { ...rest } render={ ( props ) => (
        isAuthenticated === true
            ? <Component { ...props } />
            : <Redirect to={ {
                pathname: '/login',
                state: { from: props.location }
            } } />
    ) } />
)

const AuthButton = withRouter( ( { isAuthenticated, dispatch, history } ) => (
    
    isAuthenticated ? (
        <p>
            Welcome! <button onClick={ () =>
            {
                dispatch( unsetAuthedUser())
                history.push( '/' )
            } }>Sign out</button>
        </p>
    ) : (
            <p>You are not logged in.</p>
        )
) )


export class AuthPage extends Component
{
    state = {
        isAuthenticated: false,
        uid: ''
    }
    render ()
    {
        const { isAuthenticated, dispatch } = this.props;
        
        return (
            <Router>
                <div>
                    <AuthButton isAuthenticated={ isAuthenticated } dispatch={ dispatch }/>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                    </ul>
                    <PrivateRoute path='/home' component={ Home } isAuthenticated={ isAuthenticated}/>
                    <Route path="/login" component={ Login } />
                   
                </div>
            </Router>
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
