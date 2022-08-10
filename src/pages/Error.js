import React from 'react';
import Layout from '../common/Layout';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Layout>
      <div className="error-area ptb--200 ptb_sm--60 ptb_md--80">
        <div className="container">
          <div className="row align-item-center">
            <div className="col-lg-12">
              <div className="error-inner">
                <h1>404</h1>
                <h2 className="title">Something’s not right.</h2>
                <p className="description"> This page doesn't Exist.</p>
                {/*<form action="#" className="blog-search">*/}
                {/*    <input type="text" placeholder="Search Here..." />*/}
                {/*    <button className="search-button"><FaSistrix /></button>*/}
                {/*</form>*/}
                <div className="view-more-button">
                  <Link className="btn-default" to="/">
                    Go Back Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Error;
