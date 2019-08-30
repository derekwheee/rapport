const Redux = require('redux');
const Wiring = require('./');

exports.makeRoot = (asyncReducers) => {

    const reducers = Wiring.reducers();

    // Some reducer files may export multiple reducers
    // Find objects in `reducers` and flatten
    for (const key in reducers) {
        if (reducers.hasOwnProperty(key)) {
            const reducer = reducers[key];

            if (typeof reducer !== 'function') {
                Object.assign(reducers, { ...reducer });
                delete reducers[key];
            }
        }
    }

    return Redux.combineReducers({
        ...reducers,
        ...asyncReducers
    });
};

exports.inject = (store, { key, reducer }) => {

    store.asyncReducers[key] = reducer;
    const root = exports.makeRoot(store.asyncReducers);
    store.replaceReducer(root);
};
