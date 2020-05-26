export function formatDate ( timestamp )
{
    const d = new Date( timestamp )
    const time = d.toLocaleTimeString( 'en-US' )
    return time.substr( 0, 5 ) + time.slice( -2 ) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion ( question, users, authedUser)
{
    const fomattedAuthedUser = getAuthDetails( users, authedUser )

        if ( !fomattedAuthedUser )
        {
            return null
        } else
        {
            const author = users[ question.author ];
            const { id, timestamp, optionOne, optionTwo } = question
            const { name, avatarURL } = author
            const hasVotedOptionOne = optionOne.votes.includes( fomattedAuthedUser.id );
            const hasVotedOptionTwo = optionTwo.votes.includes( fomattedAuthedUser.id );
            return {
                name,
                id,
                timestamp,
                avatarURL,
                optionOne,
                optionTwo,
                optionOneText: optionOne.text,
                optionOneVotes: optionOne.votes.length,
                hasVotedOptionOne,
                optionTwoText: optionTwo.text,
                optionTwoVotes: optionTwo.votes.length,
                hasVotedOptionTwo,
                hasVoted: ( hasVotedOptionOne === true || hasVotedOptionTwo === true ) ? true : false,

            } 
    }
    
}
export function getAuthDetails ( users, authedUser )
{
    const data = users[ authedUser ] ? users[ authedUser ] : null;
    return data;
    
}

function returnInclude (filter, data, key)
{
    const filterByArr = [
        'anwsered',
        'unAnwsered'
    ]
    let filterBy = null
    switch ( filter )
    {
        case filterByArr[ 0 ]:
            filterBy = !data.includes(key);
            break;
        case filterByArr[ 1 ]:
            filterBy = data.includes( key );
            break;
        default:
            filterBy = !data.includes( key )
            break;
    }
    return filterBy;
}
function filteredQuestions ( { authedUser, users, questions }, filter)
{
    
    const fomattedAuthedUser = getAuthDetails( users, authedUser )

    if ( !fomattedAuthedUser )
    {
        return null
    } else
    {
        const anwsers = [ ...Object.keys( fomattedAuthedUser.answers ) ];
        const filt = Object.keys( questions )
            .sort( ( a, b ) => questions[ b ].timestamp - questions[ a ].timestamp )
            .filter( ( key ) => returnInclude( filter, anwsers, key ) )
            .reduce( ( obj, key ) =>
            {
                return {
                    ...obj,
                    [ key ]: questions[ key ]
                }
            }, {} )
        
        /* const filt = Object.keys( questions )
            .sort( ( a, b ) => questions[ b ].timestamps - questions[ a ].timestamps )
            .filter( ( key ) => anwsers.includes( key ) )
            .reduce( ( obj, key ) =>
            {
                return {
                    ...obj,
                    [ key ]: questions[ key ]
                }
            }, {} ) */ 
        
        return filt;
        
    }
}
export function getUnAwseredQuestions ( { authedUser, users, questions } )
{
    const filterBy = 'anwsered';
    return filteredQuestions( { authedUser, users, questions }, filterBy )
}
export function AwseredQuestions ( { authedUser, users, questions } )
{
    const filterBy = 'unAnwsered';
    return filteredQuestions( { authedUser, users, questions }, filterBy )
}

export function formatUsers ( users )
{
    const theusers = Object.keys( users )
        .map( ( uid ) =>
            users[uid]
    ).map( ( data ) =>
    {
        return {
            id: data.id,
            name: data.name,
            avatarURL: data.avatarURL,
            answered: Object.keys( data.answers ).length,
            created: data.questions.length,
            score: Object.keys( data.answers ).length + data.questions.length,
        }
    } ).sort( ( a, b ) => b.score - a.score )

    return theusers;

}