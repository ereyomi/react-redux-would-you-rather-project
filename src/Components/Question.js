import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';
import { Link } from 'react-router-dom';

export class Question extends Component {
    render ()
    {
        const { question } = this.props;
        const { name, avatar, optionOneText, optionTwoText } = question;
        return (
            <div>
                <h2>{ name } asks: </h2>
                <h3>Would you rather</h3>
                <div>{ avatar }</div>
                <p>{ optionOneText } or { optionTwoText }</p>
                <Link to="/vote">Vote</Link>
            </div>
        )
    }
}

function mapStateToProps ({ users, questions }, { id }) {
    const question = questions[id]
    return {
        question: question ? formatQuestion( question, users[ question.author ] ) : null
    }
}

export default connect( mapStateToProps)(Question)
