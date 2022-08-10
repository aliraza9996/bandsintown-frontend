import React, { useEffect, useState } from 'react';
import Layout from '../../common/Layout';
import EventsProp from './itemProp/EventsProp';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

const EventsList = (props) => {
  const [events, setEvents] = useState([]);
  const [artist, setArtist] = useState({});
  const artistID = props.match.params.id;
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function getEvents() {
      //Get events
      //First get the artist from its id, get id from the url
      //Then if its events count > 0 then get events
      setLoader(true); //Set loading to true
      axios
        .get(
          process.env.REACT_APP_BRANDSINTOWN_DEFAULT_URL +
            `/artists/id_${artistID}?app_id=` +
            process.env.REACT_APP_BRANDSINTOWN_APP_ID
        )
        .then((response) => {
          setArtist(response.data);
          //if events count >0 get events else do no get events
          if (response.data.upcoming_event_count > 0) {
            axios
              .get(
                process.env.REACT_APP_BRANDSINTOWN_DEFAULT_URL +
                  `/artists/id_${artistID}/events?app_id=` +
                  process.env.REACT_APP_BRANDSINTOWN_APP_ID
              )
              .then((response) => {
                setLoader(false); //set loading to false
                setEvents(response.data); //set events data
              })
              .catch((error) => {
                console.error(error);
                setLoader(false); //set loading to false
              });
          } else {
            setLoader(false);
          }
        })
        .catch((error) => {
          console.error(error);
          setLoader(false);
        });
    }
    getEvents(); //get events
  }, []);
  return (
    <>
      <Layout>
        <div className="main-content">
          <div className="rn-blog-area rn-section-gap">
            <div className="container">
              {/*Show loader when data is not loaded*/}
              {loader ? (
                <div className="text-center">
                  <Spinner animation="border" role="status" size="lg" />
                </div>
              ) : (
                // When data is loaded render this
                <div className="row mt_dec--30">
                  <EventsProp events={events} artist={artist} />
                </div>
              )}
            </div>
          </div>
          {/* End Events Area  */}
        </div>
      </Layout>
    </>
  );
};

export default EventsList;
