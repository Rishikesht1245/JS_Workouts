import { STORE_USERS, DELETE_USER, UPDATE_USER } from "./user.action";
const initialState = {
    users: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_USERS:
            return { ...state, users: action.payload };
        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload ? { ...user, updated: true } : user)
            };
        case DELETE_USER:
            return { ...state, users: state.users.filter(user => user.id !== action.payload) };
        default:
            return state;
    }
};

export default userReducer;
