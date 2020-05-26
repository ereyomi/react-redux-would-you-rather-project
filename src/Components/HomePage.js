import React, { Component } from 'react'
import { Switch, Route, NavLink } from "react-router-dom"
import UnAnwseredQuestions from './UnAnwseredQuestions'
import AnwseredQuestions from './AnwseredQuestions'

export class HomePage extends Component {
    render() {
        let { path, url } = this.props.match;
        let isActive = false;
        let secondaryPath = this.props.location.pathname.length;
        let defaultpath = path.length
        if ( defaultpath < secondaryPath )
        {
            isActive = true;
        }
        return (
            <div className="home">
                <div className="row flex-direction-column pad-top">
                    <div className="col-6 flex-direction-column">
                        <nav className="col-12">
                            <ul className="row flex-direction-row">
                                <li className="nav-li col-6 justify-content-and-align-items-to-center">
                                    <NavLink
                                        to={ `${ url }` }
                                        className={ isActive === false ? 'nav-active' : 'nav-notActive' }>UnAnwsered Questions</NavLink>

                                </li>
                                <li className="nav-li col-6 justify-content-and-align-items-to-center">
                                    <NavLink
                                        to={ `${ url }/aws` }
                                        className={ isActive === true ? 'nav-active' : 'nav-notActive' }>Anwsered Questions</NavLink>
                                </li>
                            </ul>
                        </nav>


                        <Switch>
                            <Route exact path={ path }>
                                <UnAnwseredQuestions />
                            </Route>
                            <Route exact path={ `${ path }/aws` }>
                                <AnwseredQuestions />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage
