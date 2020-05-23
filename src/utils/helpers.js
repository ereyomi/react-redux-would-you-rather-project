export function formatDate ( timestamp )
{
    const d = new Date( timestamp )
    const time = d.toLocaleTimeString( 'en-US' )
    return time.substr( 0, 5 ) + time.slice( -2 ) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion( question, author, authedUser = null )
{
    const { id, timestamp, optionOne, optionTwo } = question
    const { name, avatarURL } = author

    return {
        name,
        id,
        timestamp,
        avatar: avatarURL,
        optionOneText: optionOne.text,
        optionOneVotes: optionOne.votes.length,
        hasVotedOptionOne: optionOne.votes.includes(authedUser),
        optionTwoText: optionTwo.text,
        optionTwoVotes: optionTwo.votes.length,
        hasVotedOptionTwo: optionTwo.votes.includes( authedUser ),
    }
}
export function formatAuth ( users, authedUser )
{
    const data = users[ authedUser ] ? users[ authedUser ] : null;
    return data;
    
}

export function getUnAwseredQuestions ( { authedUser, users, questions })
{
    const fomattedAuthedUser = formatAuth( users, authedUser )

    if ( !fomattedAuthedUser )
    {
        return null
    } else
    {
        const anwsers = [...Object.keys(fomattedAuthedUser.answers)];
        const filt = Object.keys( questions )
        .sort( ( a, b ) => questions[ a ].timestamps - questions[ b ].timestamps )
        .filter( ( key ) => !anwsers.includes( key ) )
            .reduce( ( obj, key ) =>
            {
                return {
                    ...obj,
                    [ key ]: questions[ key ]
                }
            }, {} ) 
        
        return filt;
        
    }
    

}