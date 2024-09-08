import axios from 'axios'


const axiosInstance = axios.create(
    {
        baseURL: 'https://api.themoviedb.org/3/',
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          api_key: 'ee969fb89a0fad16d3bf91e805f14b69'
        }
    }
)

export default axiosInstance;
