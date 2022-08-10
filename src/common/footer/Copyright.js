import React from 'react';

const Copyright = () => {
  return (
    <div className="copyright-area copyright-style-one">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 col-sm-12 ">
            <div className="copyright-right text-center text-md-right">
              <p className="copyright-text">© BandsInTown {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Copyright;
