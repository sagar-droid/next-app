import React from 'react';
import HeroSection from './components/sections/heroSection/heroSection';
import Categories from './components/sections/categories/categories';
import Devices from './components/sections/devices/devices';
import Faqs from './components/sections/faqs/faqs';
import Pricing from './components/sections/pricing/pricing';
import Cta from './components/sections/cta/cta';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Categories />
            <Devices />
            <Faqs />
            <Pricing />
            <Cta />
        </div>
    );
};

export default Home;
