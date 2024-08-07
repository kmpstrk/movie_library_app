import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ErrorProps } from "../../interfaces/ErrorProps";

const Error : React.FC<ErrorProps> = ({text})=>{

    return (
        <div className="errorContainer">
            <FontAwesomeIcon icon = 'sad-tear' />
            <p>{text}</p>
        </div>
    )
}

export default Error;