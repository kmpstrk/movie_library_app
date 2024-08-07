import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import CategoryPage from './pages/CategoryPage';
import SearchResPage from './pages/SearchResPage';
import DetailPage from './pages/DetailPage';

const App: React.FC = () => {

  return (
    <>
    <Router>       
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path="/category/:id/:name" element={<CategoryPage />} />
            <Route path="/search" element={<SearchResPage />} />
            <Route path="/:from/detail/:movieId" element={<DetailPage />} />
            <Route path="/category/:id/:name/:from/detail/:movieId" element={<DetailPage />} />
            <Route path="/search/:from/detail/:movieId" element={<DetailPage />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;