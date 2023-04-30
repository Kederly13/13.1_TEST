import axios, {AxiosResponse, AxiosRequestConfig}from 'axios';  
import { ID } from 'types/ID';
import { getErrorMessage } from 'utils/getErrorMessage';


const url = 'https://jsonplaceholder.typicode.com';

const NewsAPI = {
    getAll: async (): Promise<AxiosResponse | string> => {
        try {
            const { data } = await axios.get(`${url}/comments`);
            return data;
        } catch (error) {
            console.log(error);
            return getErrorMessage(error);
        }  
    },
    getSingle: async ({ id }: ID): Promise<AxiosResponse | string> => {
        try {
            const { data } = await axios.get(`${url}/comments/${id}`);
            return data;
        } catch (error) {
            console.log(error);
            return getErrorMessage(error);
        }  
    },
}


export { NewsAPI };