import React from 'react';
import '../styles/App.css';
import Header from './Header';
import ListOfItems from './ListOfItems';


const App: React.FC = () => {

  return (
    <div>
      <Header />
      <div className='bodyContainer'>
      <ListOfItems name = 'movie'/>
      <ListOfItems name = 'tv'/>
      </div>
    </div>
  );
}

export default App;