import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.trello.com/1',
  params: {
    key: process.env.REACT_APP_TRELLO_API_KEY,
    token: process.env.REACT_APP_TRELLO_API_TOKEN,
  }
});