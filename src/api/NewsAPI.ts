import axios, { AxiosResponse }from 'axios';  

const url = 'https://jsonplaceholder.typicode.com';
const NewsAPI = {
    getAll: async (): Promise<AxiosResponse> => await axios.get(`${url}/comments`),
}

export { NewsAPI };