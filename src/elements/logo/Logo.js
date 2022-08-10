import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ image, image2 }) => {
  return (
    <>
      <div className="logo">
        <Link to={{ pathname: process.env.PUBLIC_URL + '/', state: { popup: false } }}>
          <img className="logo-light" src={image} alt="Bands in town logo" />
          <img className="logo-dark" src={image2} alt="Bands in town logo" />
        </Link>
      </div>
    </>
  );
};
Logo.propTypes = {
  image: PropTypes.string,
};

export default Logo;
