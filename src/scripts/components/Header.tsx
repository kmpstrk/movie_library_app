import SearchForm from './SearchForm'
import '../../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../fontAwesome'
import { Link } from 'react-router-dom'

const Header: React.FC  = ()=>{

    return (
    <div className='headerContainer'>
    <Link to = '/'>
        <div className='logoContainer'>
            <FontAwesomeIcon icon='film' className='filmIcon'/>
            <p>library</p>
        </div>
    </Link>
        
    <SearchForm />
    </div>
    )
}


export default Header;