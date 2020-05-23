import { saveQuestionAnswer } from '../utils/api'
import { votedByUser } from './users';
import { getUnAwseredQuestions } from '../utils/helpers';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const VOTE_QUESTION = 'VOTE_QUESTIONS';
export const VOTED_FOR_QUESTION = 'VOTED_FOR_QUESTION';
export const UNANSWERED_QUESTIONS = 'UNANSWERED_QUESTIONS';


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}
export function unAnsweredQuestions ( data )
{
    return {
        type: UNANSWERED_QUESTIONS,
        questions: getUnAwseredQuestions(data),
    }
}
function votedForQuestion ( questions )
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

