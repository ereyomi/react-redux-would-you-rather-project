import React,  {Component} from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class UnAnwseredQuestions extends Component
{
    render ()
    {
        return (
            <div>
                <div>
                    <h3 className="center">UnAnwsered Questions</h3>
                    <ul className="dashboard-list">
                        {
                            this.props.questionsIds.map( ( id ) => (
                                <li key={ id }>
                                    <Question id={ id } />
                                </li>
                            ) )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
function mapStateToProps ( { users, questions } )
{
    return {
        questionsIds: Object.keys(questions)
        .sort((a, b) => questions[a].timestamps - questions[b].timestamps)
    }
} 
export default connect( mapStateToProps)(UnAnwseredQuestions)
