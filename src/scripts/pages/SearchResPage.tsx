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
import MainTitle from "../components/MainTitle";
import Loading from "../components/Loading";

const SESSION_STORAGE_MOVIES_KEY = 'cached_search_result';


const SearchResPage : React.FC = ()=>{
    const [searchResult, setSearchResult] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean> (true);
    
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
                                sort_by: 'popularity.desc',
                            }
                        }
                    )
                    setSearchResult(response.data.results);
                    sessionStorage.setItem(SESSION_STORAGE_MOVIES_KEY, JSON.stringify(response.data.results));
                    setLoading(false);
                } catch (err) {
                    console.log(err);
                }
            }
            fetchData();
        }, [searchQuery]
    )


    return (
        <div className="searchResPageContainer">

            <Header />

            {loading ? (
                <Loading />
            ) : (

            <div className="searchResPageContent">

                <div className='pageTitle'>
                    <BackButton />
                    <h1> <MainTitle title = {searchQuery} /> </h1> 
                </div>

                <div className="searchResultContainer">
                    {searchResult.length > 0 ? (
                        <SearchResultItems result={searchResult} from = 'search_result'/>
                    ) : (
                        <Error text = 'Nothing is found'/>
                    )}
                </div>

            </div>
            )}
            
        </div>
    )

}

export default SearchResPage;