import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { unsetAuthedUser } from '../actions/authedUser'
import { getAuthDetails } from '../utils/helpers'
export class Nav extends Component
{
    signOut = () =>
    {
        const { dispatch, history } = this.props;
        dispatch( unsetAuthedUser())
        history.push( '/' )
    }
    render ()
    {
        const { isAuthenticated, authedUser } = this.props; 
        return (
            <header className="header">
                <nav className="nav">
                    <ul>
                        <li>
                            <NavLink to="/home" activeClassName="is-active">
                                Home
                        </NavLink>
                        </li>
                        <li>
                            <NavLink to="/add" activeClassName="is-active">
                                New Question
                        </NavLink>
                        </li>
                        <li>
                            <NavLink to="/leaderboard" activeClassName="is-active">
                                Leader Board
                        </NavLink>
                        </li>
                    </ul>

                </nav>
                <div className="authDiv">
                    { ( isAuthenticated && authedUser ) ? (
                            
                        <div className="authDiv-sm">
                            <span>Hello, { authedUser.name }</span>
                            <span className="profile"><img src={ `../avatar/${ authedUser.avatarURL}` } alt="snvfsf"/></span>
                            <button onClick={ this.signOut } className="logoutBtn">logout</button>
                        </div>
                    ) : ''
                    }
                </div>
            </header>
        )
    }
}

function mapStateToProps ( { users, authedUser } )
{
    return {
        users,
        authedUser: getAuthDetails( users, authedUser),
        isAuthenticated: authedUser ? true : false,
    }
}

export default withRouter(connect( mapStateToProps)(Nav))
