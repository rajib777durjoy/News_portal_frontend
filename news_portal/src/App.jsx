import React from 'react';
import Mainpage from './pages/Mainpage';
import { Route, Routes } from 'react-router';
import './index.css'
import NewsList from './pages/Main/NewsList';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mainpage></Mainpage>} />
       
      </Routes>
    </div>
  );
};

export default App;