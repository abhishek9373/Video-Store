import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '6c1f62e736msh924569f22e12da8p1ccf3ajsnc9afe8ce35a7',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  } 
};

export const  Fetchfromapi = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
     
    return data;
}