import { useState, useEffect } from 'react'
import axiosInstance from '../AxiosConfig'
import {Movie} from '../../interfaces/Movie'
import ListProps from '../../interfaces/ListProps'
import '../../styles/ListOfItems.css'
import ListItem from './ListItem'
import Error from './Error'

const SESSION_STORAGE_MOVIES_KEY = 'cached_';


const ListOfItems: React.FC<ListProps> = ({name})=>{

    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const storedItems = sessionStorage.getItem(SESSION_STORAGE_MOVIES_KEY+name)
              if(storedItems){
                setMovies(JSON.parse(storedItems));
              } else {
                const response = await axiosInstance.get<{ results: Movie[] }>(name+'/popular',
                  {params:{
                    append_to_response: 'credits',
                  }}
                );
                setMovies(response.data.results);
                sessionStorage.setItem(SESSION_STORAGE_MOVIES_KEY+name, JSON.stringify(response.data.results));
              }
            } catch (err) {
              <Error text = 'Failed to fetch data' />
            }
          };
      
          fetchData();
    }, [name])

    
    return (
      <div className= 'hp_container'>
        <h1> Popular now</h1>
        {movies.length > 0 ? (
          <div className= {name + '_hp_container'}>
            {movies.map((movie) => (
             <ListItem 
                  key={movie.id}
                  movie = {movie}
                  from = {name} />
              ))
            }
          </div>
      ) : (
        <Error text = 'No data' />
      )}
      </div>
      );
}

export default ListOfItems;