import axios from 'axios'


const axiosInstance = axios.create(
    {
        baseURL: 'http://www.omdbapi.com/?apikey=4df7c018&',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : '4df7c018',
        }
    }
)

export default axiosInstance;