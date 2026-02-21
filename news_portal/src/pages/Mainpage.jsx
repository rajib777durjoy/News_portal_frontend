import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Main/Home';
import NewsList from './Main/NewsList';

const Mainpage = () => {
    return (
        <div className='w-full min-h-screen '>
            <nav className='w-[90%] mx-auto'>
                <Navbar></Navbar>
            </nav>
            <main>
                <Home></Home>
            </main>
        </div>
    );
};

export default Mainpage;