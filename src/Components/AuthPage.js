import React, { Component } from 'react'
import
{
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login'
import Home from './Home'

const PrivateRoute = ( { isAuthenticated, component: Component, ...rest } ) => (
    <Route { ...rest } render={ ( props ) => (
        isAuthenticated === true
            ? <Redirect to={ {
                pathname: '/home',
                state: { from: props.location }
            } } />
            : <Redirect to={ {
                pathname: '/login',
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
            <Router>
                <div>
                    <Switch>
                        <PrivateRoute exact path='/' component={ Home } isAuthenticated={ isAuthenticated } />
                        <Route path="/login" component={ Login } />
                    </Switch>
                    
                   
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
