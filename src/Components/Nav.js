import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
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
            <div>
                <nav className="nav">
                    <ul>
                        <li>
                            <Link to="/home">
                                Home
                        </Link>
                        </li>
                        <li>
                            <Link to="/newQuestion">
                                New Question
                        </Link>
                        </li>
                        <li>
                            <Link to="/leaderboard">
                                Leader Board
                        </Link>
                        </li>
                    </ul>

                </nav>
                <div>
                    { isAuthenticated ? (
                        <p>
                            <button onClick={ this.signOut }>Sign out</button>
                            {
                                authedUser
                                    ? authedUser.name
                                    : ''
                            }
                        </p>
                    ) : (
                            <p>You are not logged in.</p>
                        )
                    }
                </div>
            </div>
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
