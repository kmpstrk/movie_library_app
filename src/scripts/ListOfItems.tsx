import { useState, useEffect } from 'react'
//import axiosInstance from './AxiosConfig'
import axios from 'axios'
import {Movie} from '../interfaces/Movie'
import ListProps from '../interfaces/ListProps'
import '../styles/ListOfItems.css'
import ListItem from './ListItem'

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

    console.log(movies);

    return (
      <div className= 'hp_container'>
        <h1> Popular {name}s</h1>
           {movies.length > 0 ? (
        <div className= {name + '_hp_container'}>
          {movies.map((movie) => (
              <ListItem 
              id = {movie.id} 
              title = {movie.title} 
              release_date = {movie.release_date} 
              vote_average={movie.vote_average} 
              poster_path={movie.poster_path} />
        
          ))}
        </div>
      ) : (
        <p>No data available</p>
      )}
        </div>
      );
}

export default ListOfItems;