import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUnAwseredQuestions } from '../utils/helpers';
import Question from './Question';

class UnAnwseredQuestions extends Component
{
    render ()
    {
        const { questions } = this.props;
        
        return (
            <div className="row pad-top">
                <ul className="col-12 flex-direction-column">
                    {
                        questions ? Object.keys(questions).map( ( id ) => (
                            <li key={ id } className="col-12 card">
                                <Question id={ id } />
                            </li>
                        ) ) : ''
                    }
                </ul>
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

export default connect( mapStateToProps)(UnAnwseredQuestions)
