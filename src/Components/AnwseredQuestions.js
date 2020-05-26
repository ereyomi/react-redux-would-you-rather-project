import React from 'react'
import { connect } from 'react-redux';
import { AwseredQuestions } from '../utils/helpers';
import Question from './Question';

const AnwseredQuestions = ( { questions }) => {
        return (
            <div className="row pad-top">
                <ul className="col-12 flex-direction-column">
                    {
                        questions ? Object.keys( questions ).map( ( id ) => (
                            <li key={ id } className="col-12 card">
                                <Question id={ id } />
                            </li>
                        ) ) : ''
                    }
                </ul>
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