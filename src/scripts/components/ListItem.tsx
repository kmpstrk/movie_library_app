import {ItemProps} from '../../interfaces/ItemProps';
import { Movie } from '../../interfaces/Movie';
import { MovieProps } from '../../interfaces/movieProps';
import '../../styles/ListItem.css';
import {Link} from 'react-router-dom'

const ListItem : React.FC<MovieProps> = ({movie})=>{

    return(
        

            <div className='listItemContainer'>
                <h1>{movie.title}</h1>
                <p><strong>Year:</strong> {movie.release_date}</p>
                <p><strong>Rating:</strong> {movie.vote_average}</p>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt= {'Poster of ' + movie.title} />
            </div>

        
    )
}

export default ListItem