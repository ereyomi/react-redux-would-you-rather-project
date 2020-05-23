import React from 'react'
import
{
    Switch,
    Route,
    Link,
    useParams,
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
                    <Route path={ `${ path }/:topicId` }>
                        <Topic />
                    </Route>
                    <Route path={ `${ path }/aws` }>
                        <AnwseredQuestions />
                    </Route>
                </Switch>
            </div>
        )
    
}
function Topic ()
{
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();

    return (
        <div>
            <h3>{ topicId }</h3>
        </div>
    );
}
export default HomePage
