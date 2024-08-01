import { useLocation } from "react-router-dom";
import Header from "../components/Header"
import { Movie } from "../../interfaces/Movie";
import { useEffect, useState } from "react";
import axiosInstance from "../AxiosConfig";
import SearchResultItems from "../components/SearchResultItems";

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
                } catch (err) {
                    <p>Error fetching data</p>
                }
            }
            fetchData();
        }, [searchQuery]
    )


    return (
        <div>
            <Header />
            {searchResult.length > 0 ? (
                <SearchResultItems result={searchResult}/>
            ) : (
                <p>Oops</p>
            )}
        </div>
    )

}

export default SearchResPage;