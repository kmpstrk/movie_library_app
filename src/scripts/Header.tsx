import SearchForm from './SearchForm'
import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../fontAwesome'

const Header: React.FC  = ()=>{

    return (
    <>
        <div className='logoContainer'>
            <FontAwesomeIcon icon='film' className='filmIcon'/>
            <p>library</p>
        </div>
        <SearchForm />
    </>
    )
}


export default Header;