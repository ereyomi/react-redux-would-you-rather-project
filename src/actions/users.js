export const RECEIVE_USERS = 'RECEIVE_USERS';
export const VOTED_BY_USER = 'VOTED_BY_USER';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function votedByUser ( users )
{
    return {
        type: VOTED_BY_USER,
        users,
    }
}
