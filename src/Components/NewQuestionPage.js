import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

export class NewQuestionPage extends Component
{
    state = {
        optionOneText: '',
        optionTwoText: '',
        disabled: false
    }
    
    handleInput = event =>
    {
        const { name , value } = event.target;
        this.setState( {
            [name]: value
        })
    }
    setBtnDisabled = (data = false) => {
        this.setState(() => (
            {
                disabled: data
            }
        ))
    }
    handleTheSubmit = event =>
    {
        event.preventDefault();
        this.setBtnDisabled();
        const { dispatch, authedUser, history } = this.props;
        const author = authedUser;
        const { optionOneText, optionTwoText } = this.state;
        const dataToSend = { optionOneText, optionTwoText, author };
        dispatch(handleAddQuestion(dataToSend))
        
        setTimeout(() => {
            this.setBtnDisabled(true);
            history.push("/home")
        }, 500);
    }
    render() {
        return (
            <div>
                <h1>Create New Question</h1>
                <div>
                    <p>Complete the question: </p>
                    <form onSubmit={this.handleTheSubmit}>
                        <h2>Would you Rather</h2>
                        <div>
                            <input type="text"
                                placeholder="Enter Option One Text here"
                                name="optionOneText"
                                value={ this.state.optionOneText }
                                onChange={ this.handleInput}/>
                        </div>
                        <p>or</p>
                        <div>
                            <input type="text"
                                placeholder="Enter Option Two Text here"
                                name="optionTwoText"
                                value={ this.state.optionTwoText }
                                onChange={ this.handleInput }/>
                        </div>
                        <div>
                                <button type="submit" disabled={this.state.disabled}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
function mapStateToProps ( { authedUser } )
{
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(NewQuestionPage)
