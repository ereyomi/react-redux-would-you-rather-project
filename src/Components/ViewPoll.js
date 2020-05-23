import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers';
import { formatAuth } from '../utils/helpers';
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
        dispatch( voteQuestion( authedUser.id, qid, answer))
    }
    render ()
    {
        const { question, authedUser, qid } = this.props;
        if ( question === null )
        {
            return (<p> no data to load </p>)
        }
        const { optionOneText, optionTwoText } = question;
        const { name, avatarURL } = authedUser
        return (
            <div>
                <h2>{ name } asks: </h2>
                <h3>Would you rather</h3>
                <div>{ avatarURL }</div>
                <p>{ optionOneText } or { optionTwoText }</p>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="radio"
                            name={ `${ qid }` }
                            value="optionOne"
                            checked={ this.state.votedOption === 'optionOne' }
                            onChange={ this.handleOption}/>
                        <label>{ optionOneText }</label>
                    </div>
                    <div>
                        <input type="radio"
                            name={ `${ qid }` }
                            value="optionTwo"
                            checked={ this.state.votedOption === 'optionTwo' }
                            onChange={ this.handleOption }/>
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
    const { qid } = props.match.params
    const question = questions[ qid ]

    return {
        qid,
        users,
        authedUser: formatAuth( users, authedUser ),
        question: question ? formatQuestion( question, users[ question.author ] ) : null,
    }
}
export default withRouter(connect( mapStateToProps )(ViewPoll))
