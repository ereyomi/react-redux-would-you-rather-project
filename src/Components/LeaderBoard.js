import React from 'react'
import { connect } from 'react-redux'
import { formatUsers } from '../utils/helpers'


const LeaderBoard = ( { users } ) =>
{
    console.log( "lead: ", users )
    return (
        <div>
            { users.map( ( user ) => (
                <div key={ user.id }>
                    <p key={ `${ user.id }dsdfsfj` }>{ user.name }</p> 
                    <p key={ `${user.id}dsfj` }>{ user.answered}</p>
                    <p key={ `${ user.id }dssfj` }>{ user.created }</p>
                    <p key={ `${ user.id }dasdsfj`}>{ user.score }</p>
                </div>
            ))
            }
        </div>
    )
}


function mapStateToProps ( { users } )
{
    return {
        users: formatUsers(users),
    }
}

export default connect(mapStateToProps)(LeaderBoard)