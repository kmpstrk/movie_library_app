import { ReleaseDateProps } from "../../interfaces/RealeaseDateProps"


const ReleaseDate : React.FC <ReleaseDateProps> = ({date})=>{


    const transform = (date : string | undefined) : string => {
        if(!date){
            return ''
        }
        return date.slice(0,4);
    }

    return (
        <p className='small-text'>
        {transform(date)}
        </p>
    )
}

export default ReleaseDate