import {
    RECEIVE_USERS, VOTED_BY_USER,CREATED_BY_USER
} from '../actions/users'; 

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case VOTED_BY_USER:
            const { user } = action;
            const { authedUser, qid, answer } = user;
            return {
                ...state,
                [ authedUser ]: {
                    ...state[ authedUser ],
                    answers: {
                        ...state[ authedUser ].answers,
                        [ qid ]: answer
                    }
                }
            }
        case CREATED_BY_USER:
            return {
                ...state,
                [action.question.author]: {
                ...state[action.question.author],
                questions: state[action.question.author].questions.concat([action.question.id])
                }
            }
            default:
                return state
    }
}