import React from 'react';
import '../styles/App.css';
import Header from './Header';
import ListOfItems from './ListOfItems';


const App: React.FC = () => {

  return (
    <div>
      <Header />
      <ListOfItems name = 'movie'/>
      <ListOfItems name = 'tv'/>
    </div>
  );
}

export default App;