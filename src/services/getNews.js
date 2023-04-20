import axios from "axios";

const getNews = () => {
  const options = {
    method: 'GET',
    url: 'https://newscatcher.p.rapidapi.com/v1/search_enterprise',
    params: {q: 'Elon Musk', lang: 'en', sort_by: 'relevancy', page: '1', media: 'True'},
    headers: {
      'X-RapidAPI-Key': '0752332d8fmsh4bf33dffd0ab625p1d13bdjsn8865bc5cf9c9',
      'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
    }
  };
      
    return axios.request(options)
}

export default getNews;