import React from 'react';
import Banner from '../Components/Banner/Banner';
import FeaturedProduct from '../Components/FeaturedProduct/FeaturedProduct';
import BestProduct from '../Components/BestProduct/BestProduct';
import Banner2 from '../Components/Banner2/Banner2';
import Content from '../Components/Content/Content';

const Shop = () => {
    return (
        <>
            <Banner />
            <FeaturedProduct />
            <BestProduct />
            <Banner2 />
            <Content />
        </>
    );
};

export default Shop;