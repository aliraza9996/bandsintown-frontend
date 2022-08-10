import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GiWorld } from 'react-icons/gi';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
const ProductItem = (props) => {
  const [artist, setArtist] = useState(props.artist || {});
  const [defaultCover, setDefaultCover] = useState(
    'https://assets.prod.bandsintown.com/images/MusicSyncBanner/MusicSyncBanner_Wide.png'
  );
  useEffect(() => {
    setArtist(props.artist);
  }, [props && props.artist]);
  return (
    <React.Fragment>
      <div className="rwt-card">
        <div className="inner">
          <div className="thumbnail">
            <figure className="card-image">
              <Link to={'/artist/' + artist.id}>
                <>
                  {artist && artist.thumb_url ? (
                    <>
                      <img alt="Cover Image" src={artist.image_url} />
                    </>
                  ) : (
                    <img src={defaultCover} alt="Default Cover" width="100%" />
                  )}
                </>
              </Link>
            </figure>
            {/*<Link to={artist.id} className="rwt-overlay" />*/}
          </div>
          <div className="lf-item-container">
            <div className="lf-item-info-2">
              <span
                className="lf-avatar"
                style={{
                  backgroundImage: `url('${artist.thumb_url}')`,
                }}
              />
              <h6 className="title tagline-overflow search-font mb-0">
                <Link to={'/artist/' + artist.id}>{artist.name}</Link>
              </h6>
              {artist.tracker_count ? (
                <div className="tagline-overflow subtitle b2 text-capitalize tagline-font">
                  {artist.tracker_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} Followers{' '}
                </div>
              ) : null}
              {artist.upcoming_event_count ? (
                <>
                  <div>
                    <p className="prod-price">
                      {artist.upcoming_event_count ? (
                        <a>{artist.upcoming_event_count} Upcoming Shows</a>
                      ) : null}
                    </p>
                  </div>
                </>
              ) : null}
            </div>
            <div className="listing-details">
              <ul className="pl-3 float-right">
                {artist.links ? (
                  <>
                    {Object.keys(artist.links).map((item) => {
                      if (artist.links[item].type === 'facebook') {
                        return (
                          <li className="pr-2">
                            <a href={artist.links[item].url} target="_blank">
                              <BsFacebook size={20} color="blue" />
                            </a>
                          </li>
                        );
                      } else if (artist.links[item].type === 'twitter') {
                        return (
                          <li className="pr-2">
                            <a href={artist.links[item].url} target="_blank">
                              <BsTwitter size={20} color="0F9AFB" />
                            </a>
                          </li>
                        );
                      } else if (artist.links[item].type === 'website') {
                        return (
                          <li className="pr-2">
                            <a href={artist.links[item].url} target="_blank">
                              <GiWorld size={20} color="black" />
                            </a>
                          </li>
                        );
                      }
                    })}
                  </>
                ) : null}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ProductItem;
