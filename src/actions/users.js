export const RECEIVE_USERS = 'RECEIVE_USERS';
export const VOTED_BY_USER = 'VOTED_BY_USER';
export const CREATED_BY_USER = 'CREATED_BY_USER'
export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function votedByUser ( user )
{
    return {
        type: VOTED_BY_USER,
        user,
    }
}
export function createdByUser ( question )
{
    return {
        type: CREATED_BY_USER,
        question,
    }
}
