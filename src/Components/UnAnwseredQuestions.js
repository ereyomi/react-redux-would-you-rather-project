import React,  {Component} from 'react';
///import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
//import { unAnsweredQuestions } from '../actions/questions';
import { getUnAwseredQuestions } from '../utils/helpers';
import Question from './Question';

class UnAnwseredQuestions extends Component
{
    render ()
    {
        const { questions } = this.props;
        
        return (
            <div>
                <div>
                    <h3 className="center">UnAnwsered Questions</h3>
                    <ul className="dashboard-list">
                        {
                            questions ? Object.keys(questions).map( ( id ) => (
                                <li key={ id }>
                                    <Question id={ id } />
                                </li>
                            ) ) : ''
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
function mapStateToProps ( { authedUser, users, questions } )
{
    return {
        authedUser,
        users,
        questions: getUnAwseredQuestions( { authedUser, users, questions }),
    }
} 

/* function mapDispatchToProps ( dispatch, stateProps )
{
    return {
        actions: bindActionCreators( unAnsweredQuestions( stateProps ), dispatch )
    } 
} */

export default connect( mapStateToProps)(UnAnwseredQuestions)
