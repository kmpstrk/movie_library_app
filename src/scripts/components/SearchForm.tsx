import '../../styles/SearchForm.css'
import '../../fontAwesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';


const SearchForm: React.FC = ()=>{
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent)=>{
    event.preventDefault();
    query.trim() !== '' ? (
      navigate(`/search?query=${encodeURIComponent(query)}`)
    ) : (
      console.log('empty query')
    )
  }

    return(
        <div className='formContainer'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='search'></label>
          <input type='text' 
            onChange={(e)=>{setQuery(e.target.value)}}
            name = 'search'
            placeholder='Search'>
          </input>
          <button type='submit'>
            <FontAwesomeIcon icon="magnifying-glass" className='magnifyingGlassIcon'/>
          </button>
        </form>
      </div>
    )
}

export default SearchForm