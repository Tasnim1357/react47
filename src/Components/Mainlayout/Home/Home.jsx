import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../Banner/Banner';
import Category from '../../Category/Category';
import Featured from '../../Featuredjobs/Featured';

const Home = props => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
           <Featured></Featured>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;