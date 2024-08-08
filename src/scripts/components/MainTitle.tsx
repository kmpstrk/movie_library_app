import { MainTitleProps } from "../../interfaces/MainTitleProps";

const MainTitle : React.FC<MainTitleProps> = ({title})=>{

    const capitalizeFirstLetter = (text : string | undefined) : string => {
        if(!text){
            return '';
        }
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    return (
        <>{capitalizeFirstLetter(title)}</>
    )
}


export default MainTitle;