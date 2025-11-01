
// eslint-disable-next-line
const url1 = 'http://localhost';
// eslint-disable-next-line no-unused-vars
const url = 'https://api.teste.com.br';

const api = process.env.NODE_ENV === 'production' ? url : url1;

export default api