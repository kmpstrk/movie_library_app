//import CategoryButton from "./CategoryButton";
import { useEffect, useState } from "react";
import { Genre } from "../../interfaces/Genre";
import axiosInstance from "../AxiosConfig";
import Error from "./Error";
import Carousel from "./Carousel";

const SESSION_STORAGE_GENRES_KEY = 'cached_genres';


const Categories : React.FC = ()=>{

    const [genres, setGenres] = useState<Genre[]>([])

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const storedGenres = sessionStorage.getItem(SESSION_STORAGE_GENRES_KEY);
                if(storedGenres){
                    setGenres(JSON.parse(storedGenres))
                } else {
                    const response = await axiosInstance.get<{genres : Genre[]}>('/genre/movie/list');
                    setGenres(response.data.genres);
                    sessionStorage.setItem(SESSION_STORAGE_GENRES_KEY, JSON.stringify(response.data.genres))
                }
            } catch (error) {
                console.error(error);
            }
          };
          fetchData();
    },[])

    
    return(
        <>
        {genres.length > 0 ? (
           <Carousel genres={genres}/>
        ) : (
            <Error text='No categories' />
        )}
        </>
    )
}


export default Categories;