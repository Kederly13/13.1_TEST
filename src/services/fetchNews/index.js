import axios from 'axios';  

const fetchNews = async () => {
    const requestUrl = 'https://jsonplaceholder.typicode.com/comments';
    try {
        const response = await axios.get(requestUrl);
        return (response);
    } catch (error) {
        console.log(error);
    }  
}

export default fetchNews;