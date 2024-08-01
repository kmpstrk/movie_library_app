import { CategoryProps } from '../../interfaces/CategoryProps'
import '../../styles/CategoryButton.css'
import {Link} from 'react-router-dom';



const CategoryButton: React.FC<CategoryProps> = ({id, name})=>{

    
    return(
        <div className="categoryBtn">
                <Link to= {`/category/${id}/${name.toLowerCase()}`} >{name}</Link>
        </div>
        
    )
}

export default CategoryButton