const TokenTypes = require('../action-types/token');
const Api = require('../utility/api');

const validateTokenHasErrored = (hasErrored) => {
    return {
        type: TokenTypes.VALIDATE_TOKEN_HAS_ERRORED,
        hasErrored
    };
};

const validateTokenIsLoading = (isLoading) => {
    return {
        type: TokenTypes.VALIDATE_TOKEN_IS_LOADING,
        isLoading
    };
};

const validateTokenFetchDataSuccess = ({ isValid }) => {
    return {
        type: TokenTypes.VALIDATE_TOKEN_FETCH_SUCCESS,
        isValid
    };
};

const validateTokenFetch = () => {
    return async (dispatch) => {

        dispatch(validateTokenIsLoading(true));

        try {
            const response = await Api.get('/api/auth/validate');

            if (!response.status === 200) {
                dispatch(validateTokenFetchDataSuccess({ isValid: false }));
            } else {
                dispatch(validateTokenFetchDataSuccess(response.data));
            }
        } catch (err) {
            console.log(err);
            dispatch(validateTokenHasErrored(true));
        }

        dispatch(validateTokenIsLoading(false));
    };
};

module.exports = validateTokenFetch;