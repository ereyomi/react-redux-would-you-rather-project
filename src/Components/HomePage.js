import React from 'react'
import
{
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import UnAnwseredQuestions from './UnAnwseredQuestions'
import AnwseredQuestions from './AnwseredQuestions'
const HomePage = () => {

        let { path, url } = useRouteMatch();
        return (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={ `${ url }` }>UnAnwseredQuestions</Link>
                    </li>
                    <li>
                        <Link to={ `${ url }/aws` }>AnwseredQuestions</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path={ path }>
                        <UnAnwseredQuestions />
                    </Route>
                    <Route path={ `${ path }/aws` }>
                        <AnwseredQuestions />
                    </Route>
                </Switch>
            </div>
        )
    
}

export default HomePage
