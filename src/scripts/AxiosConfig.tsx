import axios from 'axios'


const axiosInstance = axios.create(
    {
        baseURL: 'https://api.themoviedb.org/3/',
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          api_key: '26739080ecbdc1f39410977a096108bf'
        }
    }
)

export default axiosInstance;