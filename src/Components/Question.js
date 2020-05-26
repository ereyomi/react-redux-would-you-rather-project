import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';
import { Link } from 'react-router-dom';
import { getAuthDetails } from '../utils/helpers';
export class Question extends Component {
    render ()
    {
        const { question, id, authedUser } = this.props;
        const { name, avatarURL, optionOneText, optionTwoText, hasVoted } = question;
        return (
            <div className="col-12 flex-direction-column pad">
                <h3 className="color-A">{ name } asks: </h3>
                <div className="col-12 flex-direction-row">
                    <div className="col-5 justify-content-and-align-items-to-center">
                        <div className="img-box">
                            <img src={ `../avatar/${ avatarURL }` } alt="snvfsf" />
                        </div>
                    </div>
                    <div className="col-7 flex-direction-column pad">
                        <h4 className="color-A">Would you rather</h4>

                        <p className="truncate-text">{ optionOneText } </p>
                        <p className="font-size-12">or</p>
                        <p className="truncate-text"> { optionTwoText }</p>
                        {
                            ( authedUser && hasVoted === false ) ?
                                ( <Link to={ `/question/${ id }` } className="btn">Vote Poll</Link> )
                                : ( <Link to={ `/viewpoll/${ id }` } className="btn">View Poll</Link> )

                        }
                    </div>
                </div>
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
