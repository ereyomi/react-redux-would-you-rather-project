export function formatDate ( timestamp )
{
    const d = new Date( timestamp )
    const time = d.toLocaleTimeString( 'en-US' )
    return time.substr( 0, 5 ) + time.slice( -2 ) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion( question, author )
{
    const { id, timestamp, optionOne, optionTwo } = question
    const { name, avatarURL } = author

    return {
        name,
        id,
        timestamp,
        avatar: avatarURL,
        optionOneText: optionOne.text,
        optionTwoText: optionTwo.text,
    }
}
export function formatAuth ( users, authedUser )
{
    const data = users[ authedUser ] ? users[ authedUser ] : null;
    return data;
    
}