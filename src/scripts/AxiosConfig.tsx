import axios from 'axios'


const axiosInstance = axios.create(
    {
        baseURL: 'https://api.themoviedb.org',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : '4df7c018',
        }
    }
)

export default axiosInstance;