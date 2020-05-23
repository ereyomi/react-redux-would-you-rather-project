import React from 'react'
import { connect } from 'react-redux';
import { AwseredQuestions } from '../utils/helpers';
import Question from './Question';

const AnwseredQuestions = ( { questions }) => {
        return (
            <div>
                <div>
                    <div>
                        <h3 className="center">Anwsered Questions</h3>
                        <ul className="dashboard-list">
                            {
                                questions ? Object.keys( questions ).map( ( id ) => (
                                    <li key={ id }>
                                        <Question id={ id } />
                                    </li>
                                ) ) : ''
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
}
function mapStateToProps ( { authedUser, users, questions } )
{
    return {
        authedUser,
        users,
        questions: AwseredQuestions( { authedUser, users, questions } ),
    }
}
export default connect( mapStateToProps )(AnwseredQuestions)