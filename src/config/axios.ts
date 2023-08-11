import axios from 'axios'
const URL = import.meta.env.VITE_SERVER_ENDPOINT as string

// export const Axios = axios.create({
//   baseURL: 'http://localhost:3500/api',
// })

export const Axios = axios.create({
  baseURL: URL,
})
