import { useState, useEffect } from 'react'
import axiosInstance from '../AxiosConfig'
import {Movie} from '../../interfaces/Movie'
import ListProps from '../../interfaces/ListProps'
import '../../styles/ListOfItems.css'
import ListItem from './ListItem'

const SESSION_STORAGE_MOVIES_KEY = 'cached';


const ListOfItems: React.FC<ListProps> = ({name})=>{

    const [movies, setMovies] = useState<Movie[]>([]);
    //const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const storedItems = sessionStorage.getItem(SESSION_STORAGE_MOVIES_KEY+name)
              if(storedItems){
                setMovies(JSON.parse(storedItems));
              } else {
                const response = await axiosInstance.get<{ results: Movie[] }>(name+'/popular');
                setMovies(response.data.results);
                sessionStorage.setItem(SESSION_STORAGE_MOVIES_KEY+name, JSON.stringify(response.data.results));
              }
            } catch (err) {
              <p>Failed to fetch data</p>
            }
          };
      
          fetchData();
    }, [name])

    //if (error) return <div>{error}</div>;

    return (
      <div className= 'hp_container'>
        <h1> Popular {name}s</h1>
        {movies.length > 0 ? (
          <div className= {name + '_hp_container'}>
            {movies.map((movie) => (
             <ListItem 
                  key={movie.id}
                  movie = {movie} />
              ))
            }
          </div>
      ) : (
        <p>No data available</p>
      )}
        </div>
      );
}

export default ListOfItems;