import '../styles/SearchForm.css'
import '../fontAwesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SearchForm: React.FC = ()=>{

    return(
        <div className='formContainer'>
        <form>
          <input type='text' placeholder='Search'></input>
          <button type='submit'>
          <FontAwesomeIcon icon="magnifying-glass" className='magnifyingGlassIcon'/>
          </button>
        </form>
      </div>
    )
}

export default SearchForm