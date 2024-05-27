// action types to use globally
export const STORE_USERS = "STORE_USERS";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";

// action creators for dispatch
export const storeUsers = (users) => {
    return { type: STORE_USERS, payload: users }
}

export const updateUser = (id) => {
    return { type: UPDATE_USER, payload: id }
}

export const deleteUser = (id) => {
    return { type: DELETE_USER, payload: id }
}
