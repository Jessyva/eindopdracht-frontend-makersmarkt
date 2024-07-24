import axios from 'axios';

const API_URL = 'http://localhost:5432/api/ondernemer';

export const getOndernemer = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createOndernemer = async (Ondernemer) => {
    const response = await axios.post(API_URL, Ondernemer);
    return response.data;
};
