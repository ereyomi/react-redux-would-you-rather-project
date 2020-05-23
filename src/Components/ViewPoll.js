import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers';
import { voteQuestion } from '../actions/questions'

export class ViewPoll extends PureComponent
{
    state = {
        votedOption: '',
    }
    handleOption = event =>
    {
        const data = event.target.value;
        console.log(data)
        this.setState( {
            votedOption: data
        })
    }
    handleSubmit = event =>
    {
        event.preventDefault();
        const { authedUser, dispatch, qid } = this.props;
        const answer = this.state.votedOption;
        dispatch( voteQuestion( authedUser, qid, answer))
    }
    render ()
    {
        const { question, qid } = this.props;
        if ( question === null )
        {
            return (<p> no data to load </p>)
        }
        const { name, optionOneText, optionTwoText, optionOneVotes, optionTwoVotes } = question;
        const totalvotes = optionOneVotes + optionTwoVotes;
        return (
            <div>
                <h2> Asked By: { name }</h2>
                <h3>Results:</h3>
                <div>
                    <p>{ optionOneText }</p>
                    <p>{ (optionOneVotes / totalvotes ) * 100 }%</p>
                    <p>{ optionOneVotes } of { totalvotes }</p>
                </div>
                <div>
                    <p>{ optionTwoText }</p>
                    <p>{ ( optionTwoVotes / totalvotes ) * 100 }%</p>
                    <p>{ optionTwoVotes } of { totalvotes }</p>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps ( { users, authedUser, questions }, props )
{
    const { question_id } = props.match.params
    const question = questions[ question_id ]

    return {
        qid: question_id,
        users,
        authedUser,
        question: question ? formatQuestion( question, users , authedUser ) : null,
    }
}
export default withRouter(connect( mapStateToProps )(ViewPoll))
