import { useLocation } from "react-router-dom";
import Header from "../components/Header"
import { Movie } from "../../interfaces/Movie";
import { useEffect, useState } from "react";
import axiosInstance from "../AxiosConfig";
import SearchResultItems from "../components/SearchResultItems";
import '../../styles/variables.css';
import BackButton from "../components/BackButton";
import '../../styles/SearchResultPage.css';
import Error from "../components/Error";

const SESSION_STORAGE_MOVIES_KEY = 'cached_search_result';


const SearchResPage : React.FC = ()=>{
    const [searchResult, setSearchResult] = useState<Movie[]>([]);
    
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('query') || '';

    useEffect(()=>{
            const fetchData = async ()=>{
                try {
                    const response = await axiosInstance.get<{results : Movie[]}>('/search/movie', 
                        {
                            params: {
                                query : searchQuery,
                            }
                        }
                    )
                    setSearchResult(response.data.results)
                    sessionStorage.setItem(SESSION_STORAGE_MOVIES_KEY, JSON.stringify(response.data.results))
                } catch (err) {
                    console.error(err);
                }
            }
            fetchData();
        }, [searchQuery]
    )


    return (
        <div>
            <Header />
            <BackButton />
            {searchResult.length > 0 ? (
                <SearchResultItems result={searchResult} from = 'search_result'/>
            ) : (
                <Error text = 'Sorry, something is wrong. Try to check your Internet connection.'/>
            )}
        </div>
    )

}

export default SearchResPage;