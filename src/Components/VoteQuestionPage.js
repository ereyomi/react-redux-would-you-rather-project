import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers';
import { voteQuestion } from '../actions/questions'

export class VoteQuestionPage extends PureComponent
{
    state = {
        votedOption: '',
    }
    handleOption = event =>
    {
        const data = event.target.value;
        this.setState( {
            votedOption: data
        } )
    }
    handleSubmit = event =>
    {
        event.preventDefault();
        const { authedUser, dispatch, qid, history } = this.props;
        const answer = this.state.votedOption;
        dispatch( voteQuestion( authedUser, qid, answer ) )
        history.push( `/viewpoll/${ qid}`)
    }
    render ()
    {
        const { question, qid } = this.props;
        if ( question === null )
        {
            return ( <p> no data to load </p> )
        }
        const { avatarURL, name, optionOneText, optionTwoText } = question;
        return (
            <div>
                <h2>{ name } asks: </h2>
                <h3>Would you rather</h3>
                <div>{ avatarURL }</div>
                <p>{ optionOneText } or { optionTwoText }</p>
                <form onSubmit={ this.handleSubmit }>
                    <div>
                        <input
                            type="radio"
                            name={ `${ qid }` }
                            value="optionOne"
                            checked={ this.state.votedOption === 'optionOne' }
                            onChange={ this.handleOption } />
                        <label>{ optionOneText }</label>
                    </div>
                    <div>
                        <input type="radio"
                            name={ `${ qid }` }
                            value="optionTwo"
                            checked={ this.state.votedOption === 'optionTwo' }
                            onChange={ this.handleOption } />
                        <label>{ optionTwoText }</label>
                    </div>

                    <button type="submit">submit</button>
                </form>


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
        question: question ? formatQuestion( question, users, authedUser ) : null,
    }
}
export default withRouter( connect( mapStateToProps )( VoteQuestionPage ) )
