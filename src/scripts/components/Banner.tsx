import axiosInstance from "../AxiosConfig"
import {useEffect, useState } from 'react'
import {Movie} from '../../interfaces/Movie'
import '../../styles/Banner.css'
import { BannerProps } from "../../interfaces/bannerProps"
import Rating from "./Rating"

const SESSION_STORAGE_MOVIES_KEY = 'cached';

const Banner : React.FC<BannerProps> = ({type, name})=>{
    const [movies, setMovies] = useState<Movie[]>([]);
    const [movie, setMovie] = useState<Movie | null>(null);
    //const [loading, setLoading] = useState<boolean>(false);
    //const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const storedMovies = sessionStorage.getItem(SESSION_STORAGE_MOVIES_KEY+type)

                if(storedMovies){
                    setMovies(JSON.parse(storedMovies));
                } else {
                    const response = await axiosInstance.get<{ results: Movie[] }>('/movie/'+type);
                    setMovies(response.data.results);
                    sessionStorage.setItem(SESSION_STORAGE_MOVIES_KEY+type, JSON.stringify(response.data.results))
                }
            } catch (err) {
              //setError('Failed to fetch data');
              //setLoading(false);
            }
          };
      
          fetchData();
    }, []);


    useEffect(()=>{
        if(movies.length > 0){
            const randomIndex = Math.floor(Math.random() * movies.length);
            setMovie(movies[randomIndex]);
        } else{
            <p>No movies data</p>
        }
    }, [movies]);


    /*
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    */


    return (
        <div className="bannerContainer">
           {movie ? (
                <>
                <h1>{name}</h1>
                <div className = 'banner'>

                    <div className='bannerTextContainer'>
                        <h2>{movie.title}</h2>
                        <p><strong>Year:</strong> {movie.release_date}</p>
                        <Rating rating = {movie.vote_average} />
                        <div className="bannerOverviewContainer">
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                    <div className='imageContainer'>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt= {'Poster of ' + movie.title} />
                    </div>
                
                </div>
                </>
            ) : ( 
                <p>No movie data available</p>
            )}
                
        </div>
    )
}

export default Banner