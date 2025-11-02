// eslint-disable-next-line
const url1 = 'http://localhost:8082';
// eslint-disable-next-line no-unused-vars
const url = 'https://d159modh3rr22x.cloudfront.net';

const api = process.env.NODE_ENV === 'production' ? url : url1;

export default api