import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { votedByUser, createdByUser } from './users';
import { getUnAwseredQuestions } from '../utils/helpers';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const VOTE_QUESTION = 'VOTE_QUESTIONS';
export const VOTED_FOR_QUESTION = 'VOTED_FOR_QUESTION';
export const UNANSWERED_QUESTIONS = 'UNANSWERED_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}
export const unAnsweredQuestions = ( data ) =>
{
    return {
        type: UNANSWERED_QUESTIONS,
        questions: getUnAwseredQuestions(data),
    }
}
export const votedForQuestion = ( question ) =>
{
    return {
        type: VOTED_FOR_QUESTION,
        question,
    }
}

export const voteQuestion = ( authedUser, qid, answer ) =>
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
export const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question,
    }
}
export const handleAddQuestion = ( { optionOneText, optionTwoText, author }) =>
{
   
    return ( dispatch ) => {
        return saveQuestion( {
            optionOneText,
            optionTwoText,
            author,
        } )
            .then( ( data ) =>
            {
                dispatch(createdByUser( data ))
                dispatch( addQuestion( data ) )
            } )
        .catch((error) => console.log("error::", error))
    }
}

