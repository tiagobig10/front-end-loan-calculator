import axios from 'axios';
import api from '../config'
export const PostApi = async (data) => {
    try {
        const response = await axios.post(`${api}/api/v1/loan-calculator`, {
            ...data,
        });
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
};