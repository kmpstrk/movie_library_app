import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Movie } from "../../interfaces/Movie";
import Header from "../components/Header";
import Rating from "../components/Rating";
import BackButton from "../components/BackButton";
import Error from "../components/Error";
import '../../styles/DetailPage.css'
import ReleaseDate from "../components/ReleaseDate";
import Divider from "../components/Divider";
import { Genre } from "../../interfaces/Genre";
import CategoryButton from "../components/CategoryButton";


const DetailPage : React.FC = ()=>{
    const { movieId, from } = useParams<{movieId: string; from:string}>();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [genres, setGenres] = useState <Genre[]> ([]);
    
    useEffect(()=> {
        if(movieId && from){
            const storedItems = sessionStorage.getItem('cached_'+from);
            if(storedItems){
                try{
                    const movies = JSON.parse(storedItems);
                    const movieIdNum = parseInt(movieId, 10);
                    const m = movies.find((m:Movie) => m.id === movieIdNum);
                    setMovie(m);
                    setGenres(findGenres(m));
                } catch (err) {
                    console.error(err);
                }
            }
        }
    }, [movieId, from])

    const findGenres = (m : Movie) : Genre[] => {
        const storedGenres = sessionStorage.getItem('cached_genres');
        const movieGenres = m.genre_ids;
        if(storedGenres && movieGenres){
            const allGenres = JSON.parse(storedGenres);
            const stringMovieGenres = String(movieGenres);
            const res = allGenres.filter((g : Genre )=> stringMovieGenres.includes(g.id));
            
            return res;
            
        }
        return [];
    }

    return(
        <div className="detailPageContainer">

            <Header />

            { movie ? (
                <div className="detailPageContent">

                    <div className="informationContainer">

                        <div className="pageTitle">
                            <BackButton />
                            <h1> {movie.title}</h1>
                        </div>
                        
                        
                        <div className="infoSummary">
                            <div className="infoRatingYear">
                                <Rating rating = {movie.vote_average} />
                                <Divider/>
                                <ReleaseDate date = {movie.release_date} />
                                <Divider />
                            </div>
                            <div className="movieDetailGenres">
                                {
                                    genres.length > 0 ? (
                                        genres.map((genre)=>(
                                            <CategoryButton key={genre.id} id = {genre.id} name = {genre.name} />
                                        ))
                                    ) : (
                                        <></>
                                    )
                                }
                            </div>
                        </div>
                        <p className="detailPageOverview">{movie.overview}</p>
                    </div>

                    <div className="detailPageImageContainer">
                        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt='Poster'></img>
                    </div>
        
                </div> 
            ) : (
                <Error text = 'Sorry, nothing is found.'/>
            )}
           
            
        </div>
    )
}



export default DetailPage