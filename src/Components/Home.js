import React, { Component } from 'react'
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import UnAnwseredQuestions from './UnAnwseredQuestions';
import AnwseredQuestions from './AnwseredQuestions';


export class Home extends Component {
    render ()
    {
        
        /* const { isAuthenticated } = this.props; */
        
        // const { from } = this.props.location.state || { from: { pathname: '/' } }

        // if ( isAuthenticated === false )
        // {
        //     console.log("home- auth:", isAuthenticated)
        //     return <Redirect to="/" /> || <Redirect to={ from } />
        // }
        let { path, url } = this.props.match; 
        return (
            <div>
                
                <nav className="nav">
                    <ul>
                        <li>
                            <Link to={ url }>UnAnwseredQuestions</Link>
                        </li>
                        <li>
                            <Link to={ `${ url }/anwsered` }>AnwseredQuestions</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path={path}>
                        <UnAnwseredQuestions />
                    </Route>
                    <Route path={ `${ path }/anwsered` }>
                        <AnwseredQuestions />
                    </Route>
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

export default withRouter(connect( mapStateToProps)(Home))
