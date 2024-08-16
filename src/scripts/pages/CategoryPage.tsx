import '../../styles/variables.css';
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { Movie } from "../../interfaces/Movie";
import axiosInstance from "../AxiosConfig";
import SearchResultItems from "../components/SearchResultItems";
import BackButton from '../components/BackButton';
import '../../styles/SearchResultPage.css';
import MainTitle from '../components/MainTitle';
import Error from '../components/Error';
import Loading from '../components/Loading';

const SESSION_STORAGE_KEY = 'cached_category';

const CategoryPage: React.FC = ()=>{
    const [categoryMovies, setCategoryMovies] = useState<Movie[]>([]);
    const { name, id} = useParams<{ name: string; id: string }>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect( ()=>{
        const fetchData = async()=>{
            try{
                const response = await axiosInstance.get<{results : Movie[]}>('/discover/movie',
                    {
                        params:{
                            with_genres: id,
                            sort_by: 'popularity.desc',
                        }
                    }
                );
                setCategoryMovies(response.data.results);
                sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(response.data.results));
                setLoading(false);
            }catch(err){
                console.error(err);
            }
        };
        fetchData();
    })

    return(
        
        <div className='categoryPageContainer'>
            
            < Header />
            
            {loading ? (
                <Loading />
            ) : (
                

                <div className='categoryPageContent'>
            
                <div className='pageTitle'>
                    <BackButton />
                    <h1> <MainTitle title = {name} /> </h1> 
                </div>
                
                <div className='searchResultContainer'>
                    { categoryMovies.length > 0 ? (
                        <SearchResultItems result={categoryMovies} from = 'category'/>
                    ) : (
                        <Error text = 'No data found'/>
                    ) }
                </div>
                
            </div>
            )}

            
        </div>
    )
}

export default CategoryPage;