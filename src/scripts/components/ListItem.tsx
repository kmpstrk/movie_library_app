import { MovieProps } from '../../interfaces/movieProps';
import '../../styles/ListItem.css';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating'

const ListItem : React.FC<MovieProps> = ({movie, from})=>{

    return(
        <Link to={`${from}/detail/${movie.id}`}>
         <div className = 'listItemContainer'>
                <div className='listItemTextContainer'>
                    <h2>{movie.title}</h2>
                    <Rating rating = {movie.vote_average} />
                </div>
                <div className='imageContainer'>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt= {'Poster of ' + movie.title} />
                </div>
                
            </div>
        </Link>
           

        
    )
}

export default ListItem