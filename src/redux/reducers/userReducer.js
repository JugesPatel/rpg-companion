import { SET_CURRENT_USER } from './../../constants/action-types';

const initialState = {
    user: 'New User'
};

const userReducer = (state = initialState, actions) => {
    const {
        type,
        payload
    } = actions;

    switch (type) {
        case SET_CURRENT_USER: {
            state = {
                ...state,
                user: payload.user
            };

            break;
        }
    }

    return state;
}

export default userReducer;
