import ProductItem from './ProductItem';
import React from 'react';
import { IoIosArrowBack } from 'react-icons/all';
import { useHistory } from 'react-router-dom';

const DisplayProducts = (props) => {
  return (
    <>
      <div className="main-content">
        <div className="rwt-portfolio-area">
          <div className="row no-gutters">
            <div className="col-lg-12 mb-5 mt_dec--20" style={{ 'z-index': '1' }}>
              <div className="row row--5">
                <div className="col-lg-4 col-md-6 mt--30 portfolio">
                  {props.data ? (
                    <>
                      <ProductItem artist={props.data} />
                    </>
                  ) : (
                    <div className="mb--100 text-center">No Products Available</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DisplayProducts;
