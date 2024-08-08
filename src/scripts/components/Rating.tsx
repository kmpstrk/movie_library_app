import { RatingProps } from "../../interfaces/RatingProps"
import '../../fontAwesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../../styles/Rating.css'

const Rating : React.FC<RatingProps> = ({rating})=>{
    return (
        <div className="ratingContainer">
            <FontAwesomeIcon icon="star"/>
            {rating}
        </div>
    )
}

export default Rating