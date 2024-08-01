import CategoryButton from "./CategoryButton";
import { useEffect, useState } from "react";
import { Genre } from "../../interfaces/Genre";
import axiosInstance from "../AxiosConfig";

const SESSION_STORAGE_GENRES_KEY = 'cachedGenres';


const Categories : React.FC = ()=>{

    const [genres, setGenres] = useState<Genre[]>([])
    const [err, setErr] = useState<string | null>(null)

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
                setErr("Error fetching genres");
            }
          };
          fetchData();
    },[])

    if (err) {
        return <p>{err}</p>;
    }

    return(
        <>
        {genres.length > 0 ? (
            genres.map((genre)=>(
                <CategoryButton key={genre.id} id={genre.id} name={genre.name}/>
            ))
        ) : (
            <p>No data</p>
        )}
        </>
    )
}


export default Categories;