import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers';

export class ViewPoll extends PureComponent
{
    
    mathFloorVote = ( option, total) =>
    {
        const answer = ( option / total ) * 100;
        return `${Math.floor( answer )}%`;
    }
    render ()
    {
        const { question } = this.props;
        if ( question === null )
        {
            return (<p> no data to load </p>)
        }
        const { name, avatarURL, optionOneText, optionTwoText, optionOneVotes, optionTwoVotes, hasVotedOptionOne, hasVotedOptionTwo } = question;

        console.log( "question: ", question );
        const totalvotes = optionOneVotes + optionTwoVotes;
        return (
            <div className="row flex-direction-column pad-top">
                <div className="col-6 flex-direction-column card">
                    <div className="col-12 flex-direction-column pad">
                        <h3 className="color-A">Asked By: { name }</h3>
                        <div className="col-12 flex-direction-row">
                            <div className="col-5 justify-content-and-align-items-to-center">
                                <div className="img-box">
                                    <img src={ `../avatar/${ avatarURL }` } alt="snvfsf" />
                                </div>
                            </div>
                            <div className="col-7 flex-direction-column pad">
                                <h3 className="color-A">Results:</h3>
                                <div className="card pad" style={ {
                                    background: hasVotedOptionOne ? 'rgb(253, 243, 242)' : ''
                                    } }>
                                    <p>{ optionOneText }</p>
                                    <div className="col-12 marg-top-bottom border-radius background-B">
                                        <div className="progress-bar border-radius" style={ {
                                            width: `${ this.mathFloorVote( optionOneVotes, totalvotes )}`
                                        } }>
                                            { this.mathFloorVote( optionOneVotes, totalvotes ) }
                                        </div>
                                    </div>
                                    <p>{ optionOneVotes } of { totalvotes }</p>
                                </div>
                                <div className="card pad" style={ {
                                    background: hasVotedOptionTwo ? 'rgb(253, 243, 242)' : ''
                                } }>
                                    <p>{ optionTwoText }</p>
                                    <div className="col-12 marg-top-bottom border-radius background-B">
                                        <div className="progress-bar border-radius" style={ {
                                            width: `${ this.mathFloorVote( optionTwoVotes, totalvotes ) }`
                                        } }>
                                            { this.mathFloorVote( optionTwoVotes, totalvotes ) }
                                        </div>
                                    </div>
                                    <p>{ optionTwoVotes } of { totalvotes }</p>
                                </div>
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
        question: question ? formatQuestion( question, users , authedUser ) : null,
    }
}
export default withRouter(connect( mapStateToProps )(ViewPoll))
