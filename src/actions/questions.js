import { saveQuestionAnswer } from '../utils/api'
import { votedByUser } from './users';


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const VOTE_QUESTION = 'VOTE_QUESTIONS';
export const VOTED_FOR_QUESTION = 'VOTED_FOR_QUESTION';



export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}
export function votedForQuestion ( questions )
{
    return {
        type: VOTED_FOR_QUESTION,
        questions,
    }
}

export function voteQuestion ( authedUser, qid, answer )
{
   
    return ( dispatch ) => {
        return saveQuestionAnswer( {
            authedUser,
            qid,
            answer,
        } )
            .then( ( data ) =>
            {
                dispatch( votedForQuestion( data ) )
                dispatch( votedByUser( data ) )
            } )
        .catch((error) => console.log("error::", error))
    }
}