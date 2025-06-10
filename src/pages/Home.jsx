import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import LanguageCategories from '../components/LanguageCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LanguageCategories></LanguageCategories>
        </div>
    );
};

export default Home;