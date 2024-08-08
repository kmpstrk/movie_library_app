import { SearchResultItemsProps } from "../../interfaces/SearchResultItemsProps";
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
            <div className="noDataBlock">
                <p>Sorry, nothing is found</p>
            </div>
        )}
        </>
    )

}

export default SearchResultItems;