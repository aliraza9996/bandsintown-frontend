import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import HomepageSlider from '../elements/homepage/HomepageSlider';
import Copyright from '../common/footer/Copyright';

const Home = () => {
  return (
    <>
      {/*  Renders all the components on the homepage*/}
      <main className="page-wrapper">
        {/*Import the header*/}
        <HeaderOne btnStyle="btn-small btn-icon round" HeaderSTyle="header-transparent" />
        {/*The slider on home page with background images and search component*/}
        <HomepageSlider />
        {/*import the footer*/}
        <Copyright />
      </main>
    </>
  );
};

export default Home;
