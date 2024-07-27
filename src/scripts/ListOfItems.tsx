import { useState, useEffect } from 'react'
//import axiosInstance from './AxiosConfig'
import axios from 'axios'
import {Movie} from '../interfaces/Movie'
import ListProps from '../interfaces/ListProps'

const ListOfItems: React.FC<ListProps> = ({name})=>{

    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await axios.get<{ results: Movie[] }>(
                'https://api.themoviedb.org/3/'+name+'/popular', 
                {
                  params: {
                    api_key: '26739080ecbdc1f39410977a096108bf',
                    sort_by: 'popularity.desc',
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
    }, [name])

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
      <div className= {name + '_hp_container'}>
        <h1> THIS IS {name}s</h1>
           {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h1>{movie.title}</h1>
              <p><strong>Year:</strong> {movie.release_date}</p>
              <p><strong>Rating:</strong> {movie.vote_average}</p>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt= {'Poster of ' + movie.title} />
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