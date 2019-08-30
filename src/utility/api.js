const Axios = require('axios');
const Config = require('./config');

function getToken() {
    return localStorage.auth_token;
}

async function caller(method, route, data) {

    const token = getToken();

    const params = {
        method,
        url: `${Config.apiHost}${route}`,
        headers: {}
    };

    if (method === 'get') {
        params.params = data;
    } else {
        params.data = data;
    }


    if (token) {
        params.headers.Authorization = `Bearer ${token}`;
    }

    const response = await Axios(params);

    return response;
}

exports.get = async (route, data) => {

    return await caller('get', route, data);

};

exports.post = async (route, data) => {

    return await caller('post', route, data);

};