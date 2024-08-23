import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"
import '../../styles/BackButton.css'

const BackButton : React.FC = ()=>{
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate(-1);
    }

    return (
        <button onClick={handleClick} className="backButton">
            <FontAwesomeIcon icon="arrow-left"/>
        </button>       
    )
}

export default BackButton