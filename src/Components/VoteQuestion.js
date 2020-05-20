import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export class VoteQuestion extends Component {
    render() {
        return (
            <div>
                hello, looks like you want to vote
            </div>
        )
    }
}

export default withRouter( connect()( VoteQuestion ) );
