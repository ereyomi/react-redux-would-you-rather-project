import React, { Component } from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import UnAnwseredQuestions from './UnAnwseredQuestions';
import AnwseredQuestions from './AnwseredQuestions';


export class Home extends Component {
    render ()
    {
        
        const { isAuthenticated } = this.props;
        console.log("from home: ", isAuthenticated)
        const { from } = this.props.location.state || { from: { pathname: '/' } }

        if ( !isAuthenticated )
        {
            return <Redirect to={ from } />
        }

        return (
            <div>
                <nav className="nav">
                    <ul>
                        <li>
                            <NavLink to="home/unanwsered" exact activeClassName="active">
                                UnAnwsered Questions
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="home/anwsered" exact activeClassName="active">
                                Anwsered Questions
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    
                    <Route path="home" component={ UnAnwseredQuestions } />
                    <Route path="home/anwsered" component={ AnwseredQuestions } />
                    { /* <Route>
                        <NoMatch />
                    </Route> */ }
                </Switch>
                
            </div>
        )
    }
}
function mapStateToProps ( { authedUser, users } )
{
    return {
        authedUser,
        isAuthenticated: authedUser ? true : false,
        users: Object.keys( users )
            .map( ( userId ) => users[ userId ] )
    }
}

export default connect( mapStateToProps)(Home)
