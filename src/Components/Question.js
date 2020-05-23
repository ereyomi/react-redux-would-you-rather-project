import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';
import { Link } from 'react-router-dom';
import { getAuthDetails } from '../utils/helpers';
export class Question extends Component {
    render ()
    {
        const { question, id, authedUser } = this.props;
        const { name, avatar, optionOneText, optionTwoText, hasVoted } = question;
        return (
            <div>
               <h2>{ name } asks: </h2>
                    <h3>Would you rather</h3>
                    <div>{ avatar }</div> 
                <p>{ optionOneText } or { optionTwoText }</p>
                {
                    ( authedUser && hasVoted === false ) ?
                    (<Link to={ `/question/${ id }` }>Vote Poll</Link> )
                        : (<Link to={ `/viewpoll/${ id }` }>View Poll</Link>)

                } 
            </div>
        )
    }
}

function mapStateToProps ( { users, questions, authedUser }, { id }) {
    const question = questions[ id ];
    return {
        authedUser: getAuthDetails( users, authedUser ),
        question: question ? formatQuestion( question, users, authedUser ) : null
    }
}

export default (connect( mapStateToProps)(Question))
