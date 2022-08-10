import React from 'react';
import EventsListTwo from './EventsListTwo';
import { IoIosArrowBack } from 'react-icons/all';
import ProductItem from '../../../elements/portfolio/ProductItem';
import { useHistory } from 'react-router-dom';

const EventsProp = (props) => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <>
      <div className="col-lg-12" style={{ 'z-index': '1' }}>
        <a className="color-black cursor-pointer mb-2" onClick={goBack}>
          <IoIosArrowBack className="mb-1" />
          Back to results
        </a>
        <ProductItem artist={props.artist} />
      </div>
      <div className="col-lg-12">
        <h6 className="color-black cursor-pointer mt-5 mb-2">
          {Object.keys(props.events).length} Upcoming Events
        </h6>
        <div className="row row--15">
          {props.events.map((item) => (
            <div key={item.id} className="col-lg-4 mt--30">
              <EventsListTwo data={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default EventsProp;
