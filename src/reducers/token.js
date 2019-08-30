const TokenTypes = require('action-types/token');

exports.validateTokenHasErrored = (state = false, action) => {
    switch (action.type) {
        case TokenTypes.VALIDATE_TOKEN_HAS_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
};

exports.validateTokenIsLoading = (state = false, action) => {
    switch (action.type) {
        case TokenTypes.VALIDATE_TOKEN_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
};

exports.isTokenValid = (state = false, action) => {
    switch (action.type) {
        case TokenTypes.VALIDATE_TOKEN_FETCH_SUCCESS:
            return action.isValid;
        default:
            return state;
    }
};