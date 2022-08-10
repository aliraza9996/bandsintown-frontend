import React from 'react';
import moment from 'moment';

const EventListTwo = (props) => {
  return (
    <div className="rn-card box-card-style-default card-list-view">
      <div className="inner">
        <div className="content">
          <div className="row ml-2">
            <h2 className="ml-2 title border-bottom">Event Details</h2>
            <div className="col-lg-6">
              <p className="no-margin no-padding font-weight-bold">Country</p>
              <p className="no-margin no-padding">{props.data.venue.country}</p>
            </div>
            <div className="col-lg-6">
              <p className="no-margin no-padding font-weight-bold">City</p>
              <p className="no-margin no-padding">{props.data.venue.city}</p>
            </div>
            <div className="col-lg-6">
              <p className="no-margin no-padding font-weight-bold">Venue</p>
              <p className="no-margin no-padding">{props.data.venue.location}</p>
            </div>
            <div className="col-lg-6">
              <p className="no-margin no-padding font-weight-bold">Date</p>
              <p className="no-margin no-padding">
                {console.log(props.data)}
                {moment(props.data.datetime).format('MMMM Do YYYY hh:mm:a')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventListTwo;
