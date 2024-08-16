import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ErrorProps } from "../../interfaces/ErrorProps";
import '../../styles/Error.css'

const Error : React.FC<ErrorProps> = ({text})=>{

    return (
        <div className="errorContainer">
            <FontAwesomeIcon icon = 'sad-tear' className="sadIcon"/>
            <p>{text}</p>
        </div>
    )
}

export default Error;