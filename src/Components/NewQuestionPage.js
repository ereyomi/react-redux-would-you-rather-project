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
            <div className="row">
                <div className="col-5 pad flex-direction-column justify-content-and-align-items-to-center ">
                    <h2 className="color-A">Create New Question</h2>
                    <div className="col-12 flex-direction-column justify-content-and-align-items-to-center pad">
                        <p>Complete the question: </p>
                        <form onSubmit={ this.handleTheSubmit } className="col-12 flex-direction-column">
                            <h3 className="pad color-A">Would you Rather...</h3>
                            <div className="formgroup">
                                <input type="text"
                                    placeholder="Enter Option One Text here"
                                    name="optionOneText"
                                    value={ this.state.optionOneText }
                                    onChange={ this.handleInput } />
                            </div>
                            <h4 className="color-A" style={{textAlign: 'center', padding: '5px'}}>OR</h4>
                            <div className="formgroup">
                                <input type="text"
                                    placeholder="Enter Option Two Text here"
                                    name="optionTwoText"
                                    value={ this.state.optionTwoText }
                                    onChange={ this.handleInput } />
                            </div>
                            <div className="marg-top-bottom">
                                <button type="submit" className="btn" disabled={ this.state.disabled }>Submit</button>
                            </div>
                        </form>
                    </div>
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
