import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import LanguageCategories from '../components/LanguageCategories';
import StatSection from '../components/StatSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <StatSection className="my-12"></StatSection>
            <LanguageCategories></LanguageCategories>
            <FeaturesSection></FeaturesSection>
            <TestimonialsSection></TestimonialsSection>
        </div>
    );
};

export default Home;