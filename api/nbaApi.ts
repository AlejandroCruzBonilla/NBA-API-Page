import axios from 'axios';

export const testApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

const nbaApi = axios.create({
  baseURL: 'https://api-nba-v1.p.rapidapi.com',
  // baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    'X-RapidAPI-Key': '58c571c5b0mshaa04cf76f172d2ep1d765ejsn9cad4057ee56',
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
  }
});

export default nbaApi;
