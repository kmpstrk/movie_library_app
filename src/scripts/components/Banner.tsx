import axiosInstance from "../AxiosConfig"
import {useEffect, useState } from 'react'
import {Movie} from '../../interfaces/Movie'
import '../../styles/Banner.css'
import { BannerProps } from "../../interfaces/bannerProps"
import Rating from "./Rating"
import ReleaseDate from './ReleaseDate'
import Loading from "./Loading"
import Error from "./Error"
import { Link } from "react-router-dom"


const SESSION_STORAGE_MOVIES_KEY = 'cached_';

const Banner : React.FC<BannerProps> = ({type, name})=>{
    const [movies, setMovies] = useState<Movie[]>([]);
    const [movie, setMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

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
                setLoading(false);
            } catch (err) {
              console.error(err);

            }
          };
      
          fetchData();
    }, []);


    useEffect(()=>{
        if(movies.length > 0){
            const randomIndex = Math.floor(Math.random() * movies.length);
            setMovie(movies[randomIndex]);
        } else{
            console.error('No movies data')
        }
    }, [movies]);


    /*
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    */


    return (
        <div className = {`bannerContainer ${type}`}>
             {loading ? (
                <Loading />
            ) : (

           movie ? (
                <>
                <h1>{name}</h1>
                
                <Link to={`${type}/detail/${movie.id}`}>
                <div className = 'banner'>

                    <div className='bannerTextContainer'>
                        <h2>{movie.title}</h2>

                        <div className="dateAndRating">
                            <ReleaseDate date = {movie.release_date} />
                            <Rating rating = {movie.vote_average} />
                        </div>
                        
                        <div className="bannerOverviewContainer">
                            <p>{movie.overview}</p>
                        </div>
                    </div>

                    <div className='imageContainer'>
                        <img src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt= {'Poster of ' + movie.title} />
                    </div>
                
                </div>
                </ Link>
                </>
            ) : ( 

                <Error text='No data'/>
            ))}

                
        </div>
    )
}

export default Banner