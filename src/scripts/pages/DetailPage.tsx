import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Movie } from "../../interfaces/Movie";
import Header from "../components/Header";
import Rating from "../components/Rating";
import BackButton from "../components/BackButton";
import Error from "../components/Error";


const DetailPage : React.FC = ()=>{
    const { movieId, from } = useParams<{movieId: string; from:string}>();
    const [movie, setMovie] = useState<Movie | null>(null);
    
    useEffect(()=> {
        if(movieId && from){
            const storedItems = sessionStorage.getItem('cached_'+from);
            if(storedItems){
                try{
                    const movies = JSON.parse(storedItems);
                    const movieIdNum = parseInt(movieId, 10);
                    const m = movies.find((m:Movie) => m.id === movieIdNum);
                    setMovie(m);  
                } catch (err) {
                    console.error(err);
                }
            }
        }
    }, [movieId, from])
   

    return(
        <div>
            <Header />

            <BackButton />

            { movie ? (
                <div>
                    <h1> {movie.title}</h1>
                    <Rating rating = {movie.vote_average}/>
                    <p>{movie.overview}</p>
                </div> 
            ) : (
                <Error text = 'Sorry, something is wrong. Try to check your Internet connection.'/>
            )}
           
            
        </div>
    )
}



export default DetailPage