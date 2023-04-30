import axios, {AxiosResponse, AxiosRequestConfig}from 'axios';  
import { getErrorMessage } from 'utils/getErrorMessage';

const fetchNews = async (): Promise<AxiosResponse | string> => {
    const requestUrl = 'https://jsonplaceholder.typicode.com/comments';
    try {
        const { data } = await axios.get(requestUrl);
        return data;
    } catch (error) {
        console.log(error);
        return getErrorMessage(error);
    }  
}

export default fetchNews;