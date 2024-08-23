import { SearchResultItemsProps } from "../../interfaces/SearchResultItemsProps";
import Error from "./Error";
import ListItem from "./ListItem";


const SearchResultItems : React.FC<SearchResultItemsProps> = ({result, from})=>{

    return(
        <>
        {result.length > 0 ? (
             result.map((movie)=>(
                <ListItem 
                  key={movie.id}
                  movie = {movie} 
                  from= {from}/>
            ))
        ) : (
            <Error text='Nothing is found' />
        )}
        </>
    )

}

export default SearchResultItems;