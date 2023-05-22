import axios from 'axios'

export const Axios = axios.create({
  baseURL: 'https://foregoing-thing-production.up.railway.app/api',
})
