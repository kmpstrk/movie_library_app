import { useState, useEffect } from 'react'
//import axiosInstance from './AxiosConfig'
import axios from 'axios'
import {Movie} from '../interfaces/Movie'

const ListOfItems: React.FC = ()=>{

    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await axios.get<{ results: Movie[] }>(
                'https://api.themoviedb.org/3/discover/movie', 
                {
                  params: {
                    api_key: '26739080ecbdc1f39410977a096108bf',
                    sort_by: 'popularity.desc',
                    page: 1
                  }
                }
              );
              setMovies(response.data.results);
              setLoading(false);
            } catch (err) {
              setError('Failed to fetch data');
              setLoading(false);
            }
          };
      
          fetchData();
    }, [])

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    console.log('movies: ', movies)

    return (
      <div>
           {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h1>{movie.title}</h1>
              <p><strong>Year:</strong> {movie.release_date}</p>
              <p><strong>Rating:</strong> {movie.vote_average}</p>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt= {'Poster of' + movie.title} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
        </div>
      );
}

export default ListOfItems;