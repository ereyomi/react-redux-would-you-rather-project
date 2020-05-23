import {
    RECEIVE_USERS, VOTED_BY_USER
} from '../actions/users'; 

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case VOTED_BY_USER:
            const { users } = action;
            const { authedUser, qid, answer } = users;
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
            default:
                return state
    }
}