import axios from 'axios';

export const testApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

const nbaApi = axios.create({
  baseURL: 'https://api-nba-v1.p.rapidapi.com',
  // baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    'X-RapidAPI-Key': '...',
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
  }
});

export default nbaApi;
