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

const SESSION_STORAGE_KEY = 'cached_category';

const CategoryPage: React.FC = ()=>{
    const [categoryMovies, setCategoryMovies] = useState<Movie[]>([]);
    const { name, id} = useParams<{ name: string; id: string }>();

    useEffect( ()=>{
        const fetchData = async()=>{
            try{
                const response = await axiosInstance.get<{results : Movie[]}>('/discover/movie',
                    {
                        params:{
                            with_genres: id,
                        }
                    }
                );
                setCategoryMovies(response.data.results);
                sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(response.data.results))
            }catch(err){
                console.error(err);
            }
        };
        fetchData();
    })

    return(
        <div>
            
            < Header />

            <div className='pageTitle'>
                <BackButton />
                <h1> <MainTitle title = {name} /> </h1> 
            </div>
            
            { categoryMovies.length > 0 ? (
                <SearchResultItems result={categoryMovies} from = 'category'/>
            ) : (
                <Error text = 'Sorry, something is wrong. Try to check your Internet connection.'/>
            ) }
        </div>
    )
}

export default CategoryPage;