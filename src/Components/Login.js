import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { Redirect } from 'react-router-dom';


export class Login extends Component
{
    state = {
        isAuth: false,
        uid: ''
    }
    isAuthenticated = ( authedUser) =>
    {
        if ( this.state.isAuth )
        {
            return true;
        } else
        {
            return false;
        }
    }
    handleSubmit = event =>
    {
        event.preventDefault();
        const { uid } = this.state;
        const { dispatch } = this.props;
        if (uid !== '')
        {
            this.setState( () => ( {
                isAuth: false,
            } ) )
        }
        dispatch( setAuthedUser( uid ) );
    }
    handleSelectChange = event =>
    {
        const uid = event.target.value;

        this.setState( () => ( {
            uid,
        } ) )
    }
    render ()
    {
        const { isAuthenticated, users } = this.props;
        const { from } = this.props.location.state || { from: { pathname: '/home' } }
        
        if ( isAuthenticated )
        {
            return  <Redirect to={ from } />
        }

        return (
            <div className="row justify-content-and-align-items-to-center">
                <form onSubmit={this.handleSubmit} className="col-5 card flex-direction-column pad">
                    <div className="formgroup">
                        <select placeholder="Select User" value={this.state.userId} onChange={this.handleSelectChange}>
                            <option>Select User</option>
                            {
                                users.map( ( user ) => (
                                    <option key={ user.id } value={ user.id }>{ user.name }</option>
                                ) )
                            }
                        </select>
                    </div>
                    <button type="submit" className="btn">login</button>
                </form>
                
            </div>
        )
    }
}
function mapStateToProps ( { authedUser, users })
{
    return {
        authedUser,
        isAuthenticated: authedUser ? true : false,
        users: Object.keys( users )
            .map( ( userId ) =>  users[userId])
    }
}
export default connect( mapStateToProps)(Login)
