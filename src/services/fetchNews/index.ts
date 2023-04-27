import axios, {AxiosResponse, AxiosRequestConfig}from 'axios';  

const fetchNews = async (): Promise<AxiosResponse> => {
    const requestUrl = 'https://jsonplaceholder.typicode.com/comments';
    try {
        const response = await axios.get(requestUrl);
        return (response.data);
    } catch (error) {
        console.log(error);
    }  
}

export default fetchNews;