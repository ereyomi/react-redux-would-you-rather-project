import React from 'react'
import { connect } from 'react-redux'
import { formatUsers } from '../utils/helpers'


const LeaderBoard = ( { users } ) =>
{
    return (
        <div className="row justify-content-and-align-items-to-center">
            <div className="col-8 flex-direction-column pad">
                { users.map( ( user ) => (
                <div key={ user.id } className="card col-12 pad">
                    <div className="col-4 flex-direction-row justify-content-and-align-items-to-center">
                        <div className="img-box">
                            <img src={ `../avatar/${ user.avatarURL }` } alt="snvfsf" />
                        </div>
                    </div>
                    <div className="col-6 flex-direction-column pad" style={{justifyContent: 'center'}}>
                            <h3 className="color-A">{ user.name }</h3>  
                            <p key={ `${ user.id }dsfj` }>Answered Questions - { user.answered }</p>
                            <p key={ `${ user.id }dssfj` }>UnAnswered Questions - { user.created }</p>
                    </div> 
                        <div className="col-2 flex-direction-column justify-content-and-align-items-to-center">
                            <h2 className="color-A">Score</h2>
                        <p className="pad">{ user.score }</p>
                    </div>
                </div>
                ))
                }
            </div>
            
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