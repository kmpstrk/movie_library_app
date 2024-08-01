import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import ListOfItems from "../components/ListOfItems";
import '../../styles/Homepage.css';


const Homepage : React.FC = ()=>{
    return(
        <div className='homepageContainer'>

        <div className='headerContainer'>
            <Header />
        </div>

        <div className='bannersContainer'>
            <Banner type = 'upcoming' name = 'Upcoming' />
            <Banner type = 'top_rated' name = 'Movie of choice' />
        </div>

        <div className='categoriesContainer'>
            <Categories />
        </div>

        <div className='listsContainer'>
            <ListOfItems name = 'movie'/>
            <ListOfItems name = 'tv'/>
        </div>

    </div>
    )
}

export default Homepage;