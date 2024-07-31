import React from 'react';
import '../styles/App.css';
import Header from './Header';
import ListOfItems from './ListOfItems';
import Categories from './Categories';
import Banner from './Banner';


const App: React.FC = () => {

  return (
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
  );
}

export default App;