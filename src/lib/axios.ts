import axios from 'axios'

const hostname = 'back-ibb.vercel.app'
const BASE_URL = `https://${hostname}`

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})