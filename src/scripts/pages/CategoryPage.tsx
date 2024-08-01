import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { Movie } from "../../interfaces/Movie";
import axiosInstance from "../AxiosConfig";
import SearchResultItems from "../components/SearchResultItems";


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
                )
                ;
                setCategoryMovies(response.data.results)
            }catch(err){

            }
        };
        fetchData();
    })

    return(
        <div>
            < Header />
            <h1> { name } </h1> 
            { categoryMovies.length > 0 ? (
                <SearchResultItems result={categoryMovies}/>
            ) : (
                <div className="noDataBlock">
                    <p>Sorry, nothing is found</p>
                </div>
            ) }
        </div>
    )
}

export default CategoryPage