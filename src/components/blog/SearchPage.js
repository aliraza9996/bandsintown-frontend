import DisplayProducts from '../../elements/portfolio/productsDisplay';
import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup, Spinner } from 'react-bootstrap';
import { AiOutlineSearch, BsSearch, IoIosArrowBack } from 'react-icons/all';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import Layout from '../../common/Layout';
const SearchPage = (props) => {
  function useQuery() {
    //this function returns url parameters
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery(); //to get the query from url
  const [text, setText] = useState(query.get('s') || '');
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState({});
  const [refetch,setRefetch]=useState(0)
  const history = useHistory();


  const onChangeHandler = (text) => {
    //On change function to save text
    setText(text);
  };

  useEffect(() => {
    async function getArtist() {
      //Get the artist from artist name
      setLoader(true); //sets the loader to true
      await axios
        .get(process.env.REACT_APP_BRANDSINTOWN_DEFAULT_URL + `/artists/${query.get('s')}?app_id=0`)
        .then((response) => {
          setData(response.data);
          setLoader(false); //sets the loader to false when data is recieved
        })
        .catch((error) => {
          console.error(error);
          setLoader(false); //sets the loader to false when data is not found
        });
    }
    async function getArtistFromId() {
      //Get the artist from artist id
      setLoader(true);
      await axios
        .get(
          process.env.REACT_APP_BRANDSINTOWN_DEFAULT_URL +
            `/artists/id_${query.get('s')}?app_id=` +
            process.env.REACT_APP_BRANDSINTOWN_APP_ID
        )
        .then((response) => {
          setData(response.data);
          setLoader(false); //set loader to false
        })
        .catch((error) => {
          console.error(error);
          setLoader(false); //set loader to false when no data recieved
        });
    }
    if (query.get('artist')) {
      //If query has artist=true, search by name
      getArtist();
    } else if (query.get('artistid')) {
      //If query has artistid=true, search by artist id
      getArtistFromId();
    }
  }, [refetch]);

  const goBack = () => {
    history.goBack(); //Go to the previous page when go back is clicked
  };
  const onSearchSubmit = (e) => {
    //On form submit
    //If artist is selected, send artist=true in the search url and viceversa
    e.preventDefault();
      history.push('/search?s=' + text + '&artist=true');
      setRefetch(refetch+1)
  };

  return (
    <>
      <Layout>
        <div className="main-content container">
          <div className="mt--30">
            <div className="row">
              <div className="col-lg-12">
                <div className="mb--20">
                  <form onSubmit={(e) => onSearchSubmit(e)}>
                    <InputGroup>
                      <Form.Control
                        style={{ 'font-size': '14px' }}
                        autoComplete="off"
                        type="text"
                        placeholder="Search Here..."
                        name="s"
                        onChange={(e) => onChangeHandler(e.target.value)}
                        value={text}
                      />
                      <Button type="submit" className="btn-info" style={{ padding: '15px' }}>
                        <BsSearch size="18" />
                      </Button>
                    </InputGroup>
                  </form>
                </div>
                {/*Loading component to start loading when the data is in fetch state*/}
                {loader ? (
                  <div className="text-center">
                    <Spinner animation="border" role="status" size="lg" />
                  </div>
                ) : (
                  //When loader is stopped render the data
                  <>
                    <div>
                      <a className="color-black cursor-pointer p-3" onClick={goBack}>
                        <IoIosArrowBack className="mb-1" />
                        Back
                      </a>
                    </div>
                    {data && Object.keys(data).length !== 0 && !data.error ? (
                      <>
                        {/*If data is fetched then render this*/}
                        <DisplayProducts data={data} setSearch={props.setSearch} col=" col-lg-4" />
                      </>
                    ) : (
                      //If no data is available render this
                      <div className="mb-5 text-center">No Artist Available</div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SearchPage;
