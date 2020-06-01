const axios = require('axios');

const HTTP = axios.create({
  baseURL: 'https://reqres.in/api',
});

export default HTTP;