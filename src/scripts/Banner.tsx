import axiosInstance from "./AxiosConfig"
import {useEffect, useState } from 'react'
import {Movie} from '../interfaces/Movie'
import '../styles/Banner.css'
import { ItemProps } from "../interfaces/ItemProps"
import { BannerProps } from "../interfaces/bannerProps"

const Banner : React.FC<BannerProps> = ({type, name})=>{
    const [movies, setMovies] = useState<Movie[]>([]);
    const [movie, setMovie] = useState<Movie | null>(null);
    //const [loading, setLoading] = useState<boolean>(false);
    //const [error, setError] = useState<string | null>(null);


    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await axiosInstance.get<{ results: Movie[] }>('/movie/'+type);
              setMovies(response.data.results);
              //setLoading(false);
            } catch (err) {
              //setError('Failed to fetch data');
              //setLoading(false);
            }
          };
      
          fetchData();
    }, []);

    useEffect(()=>{
        if(movies.length > 0){
            setMovie(movies[0]);
        } else{
            //setError('No data');
        }
    }, [movies, movie]);


    /*
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    */


    return (
        <div className="banner">
           {movie ? (
                <>
                <h1>{name}</h1>
                <h2>{movie.title}</h2>
                <p><strong>Year:</strong> {movie.release_date}</p>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt= {'Poster of ' + movie.title} />
                </>
            ) : ( 
                <p>No movie data available</p>
            )}
                
        </div>
    )
}

export default Banner