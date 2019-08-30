const UserTypes = require('action-types/user');

exports.userHasErrored = (state = false, action) => {
    switch (action.type) {
        case UserTypes.USER_HAS_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
};

exports.userIsLoading = (state = false, action) => {
    switch (action.type) {
        case UserTypes.USER_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
};

exports.user = (state = {}, action) => {
    switch (action.type) {
        case UserTypes.USER_FETCH_SUCCESS:
            return action.user;
        default:
            return state;
    }
};