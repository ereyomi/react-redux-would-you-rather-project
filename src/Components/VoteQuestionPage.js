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
             <div className="row flex-direction-column pad-top">
                <div className="col-5 flex-direction-column card">
                    <div className="col-12 flex-direction-column pad">
                        <h3 className="color-A">{ name } asks: </h3>
                        <div className="col-12 flex-direction-row">
                            <div className="col-5 justify-content-and-align-items-to-center">
                                <div className="img-box">
                                    <img src={ `../avatar/${ avatarURL }` } alt="snvfsf" />
                                </div>
                            </div>
                            <div className="col-7 flex-direction-column pad">
                                <h2 className="color-A">Would you rather</h2>
                                <form className="col-12 flex-direction-column" onSubmit={ this.handleSubmit }>
                                    <div className="formgroup col-12 pad-top-bottom">
                                        <input
                                            type="radio"
                                            name={ `${ qid }` }
                                            value="optionOne"
                                            checked={ this.state.votedOption === 'optionOne' }
                                            onChange={ this.handleOption } />
                                        <label htmlFor="optionOne">{ optionOneText }</label>
                                    </div>
                                    <div className="formgroup col-12 pad-top-bottom">
                                        <input type="radio"
                                            name={ `${ qid }` }
                                            value="optionTwo"
                                            checked={ this.state.votedOption === 'optionTwo' }
                                            onChange={ this.handleOption } />
                                        <label htmlFor="optionTwo">{ optionTwoText }</label>
                                    </div>

                                    <button type="submit" className="btn">submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
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
        question: question ? formatQuestion( question, users, authedUser ) : null,
    }
}
export default withRouter( connect( mapStateToProps )( VoteQuestionPage ) )
