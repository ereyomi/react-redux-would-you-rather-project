import React, { Component } from 'react'
import { connect } from 'react-redux';
export class AnwseredQuestions extends Component {
    render() {
        return (
            <div>
                <h3 className="center">Anwsered Questions</h3>
            </div>
        )
    }
}

export default connect()(AnwseredQuestions)