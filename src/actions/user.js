const UserTypes = require('../action-types/user');
const Api = require('../utility/api');

const userHasErrored = (hasErrored) => {
    return {
        type: UserTypes.USER_HAS_ERRORED,
        hasErrored
    };
};

const userIsLoading = (isLoading) => {
    return {
        type: UserTypes.USER_IS_LOADING,
        isLoading
    };
};

const userFetchDataSuccess = (user) => {
    console.log(user);
    return {
        type: UserTypes.USER_FETCH_SUCCESS,
        user
    };
};

const userFetch = () => {
    return async (dispatch) => {

        dispatch(userIsLoading(true));

        try {
            const response = await Api.get('/api/user');

            if (!response.status === 200) {
                dispatch(userHasErrored(true));
            } else {
                dispatch(userFetchDataSuccess(response.data));
            }
        } catch (err) {
            console.log(err);
            dispatch(userHasErrored(true));
        }

        dispatch(userIsLoading(false));
    };
};

module.exports = userFetch;