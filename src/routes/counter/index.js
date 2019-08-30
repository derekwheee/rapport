const Counter = require('./Counter');

module.exports = (store) => ({
    path: 'counter',
    component: Counter,
    exact: true
});
