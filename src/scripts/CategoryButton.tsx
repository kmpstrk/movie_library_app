import { CategoryProps } from '../interfaces/CategoryProps'
import '../styles/CategoryButton.css'


const CategoryButton: React.FC<CategoryProps> = ({category, name})=>{

    return(
        <div className="categoryBtn">
            <a href="./CategoryPage.tsx">{name}</a>
        </div>
        
    )
}

export default CategoryButton