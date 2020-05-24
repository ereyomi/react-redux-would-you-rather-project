import {
    RECEIVE_QUESTIONS, UNANSWERED_QUESTIONS, VOTED_FOR_QUESTION, ADD_QUESTION
} from '../actions/questions';

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS: case UNANSWERED_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case VOTED_FOR_QUESTION:
            const { question } = action;
            const { authedUser, qid, answer } = question;
            return {
                ...state,
                [ qid ]: {
                    ...state[ qid ],
                    [ answer ]: {
                        ...state[ qid ][ answer ],
                        votes: state[ qid ][ answer ].votes.concat( [ authedUser ] )
                    }
                }
             }
            case ADD_QUESTION:
             
            return {
                ...state,
                [action.question.id]: action.question
            }
            default:
                return state
    }
}