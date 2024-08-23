import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import ListOfItems from "../components/ListOfItems";
import '../../styles/variables.css';
import '../../styles/Homepage.css';


const Homepage : React.FC = ()=>{
    return(
        <div className='homepageContainer'>

            <Header />
            
            <div className='bannersContainer'>
                <Banner type = 'upcoming' name = 'Upcoming' />
                <Banner type = 'top_rated' name = 'Movie of choice' />
            </div>

            <div className='categoriesContainer'>
                <Categories />
            </div>

            <div className='listsContainer'>
                <ListOfItems name = 'movie'/>
            </div>

    </div>
    )
}

export default Homepage;