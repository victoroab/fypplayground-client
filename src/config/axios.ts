import axios from 'axios'

export const Axios = axios.create({
  baseURL: 'https://fyp-playground-server-1.herokuapp.com/api',
})
