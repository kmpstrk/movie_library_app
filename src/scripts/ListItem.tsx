import {ItemProps} from '../interfaces/ItemProps'
import '../styles/ListItem.css'

const ListItem : React.FC<ItemProps> = ({id, title, release_date, vote_average, poster_path})=>{
    return(
        <div className='listItemContainer'>
            <h1>{title}</h1>
              <p><strong>Year:</strong> {release_date}</p>
              <p><strong>Rating:</strong> {vote_average}</p>
              <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt= {'Poster of ' + title} />
        </div>
    )
}

export default ListItem