const USER_API_NAME = {
    GET_USERS: '/users',
    GET_USER_BY_ID: '/users/:id',
    UPDATE_USER: '/users/update/:id',
    DELETE_USER: '/users/delete/:id',
} as const;

const AUTH_API_NAME = {
    USER_CREATE: '/register',
    USER_LOGIN: '/login',
} as const;

const HABITS_API_NAME = {
    GET_HABITS: '/habits',
    GET_HABIT_BY_ID: '/habits/:id',
    HABIT_COMPLETED: '/habit/:id/complete',
    HABIT_CREATE: '/habit/create',
    HABIT_DELETE: '/habit/delete',
} as const;

export { USER_API_NAME, AUTH_API_NAME, HABITS_API_NAME };
