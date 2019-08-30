// TODO: Base environment on actual environment
const environment = 'development';
const apiHosts = {
    development: 'http://localhost:3001'
};

module.exports = {
    get apiHost() {
        return apiHosts[environment];
    }
};