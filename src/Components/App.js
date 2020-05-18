import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
      return (
        <div>
            <div> Would you Rather </div>
          </div>
      
    )
  }
}

export default connect()(App)