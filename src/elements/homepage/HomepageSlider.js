import React, { useState } from 'react';
import Slider from 'react-slick';
import { BannerActivation } from '../../utils/script';
import { AiOutlineSearch, BsSearch } from 'react-icons/all';
import { InputGroup, Form } from 'react-bootstrap';
import Select from 'react-select';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'black',
    height: '30px',
    padding: '5px',
    'font-size': '12px',
  }),
  indicatorsContainer: (prevStyle) => ({
    ...prevStyle,
    display: 'inline',
  }),

  input: (provided, state) => ({
    ...provided,
    margin: '-3px',
  }),
  control: (provided, state) => ({
    'background-color': 'white',
    'border-right': '0.5px solid #F2F2F2',
    'border-radius': '20px 0px 0px 20px',
    'text-align': 'center',
    'vertical-align': 'center',
    height: '60px',
    width: '100%',
    'font-size': '14px',
  }),
  singleValue: (provided, state) => {
    const transition = 'opacity 300ms';
    return { ...provided, transition };
  },
};

const HomepageSlider = () => {
  // Imports all images for the slider
  const BannerData = [
    {
      image: '/images/Slider/1.jpg',
    },
    {
      image: '/images/Slider/2.jpg',
    },
    {
      image: '/images/Slider/3.jpg',
    },
    {
      image: '/images/Slider/4.jpg',
    },
  ];
  const [suggestions, setSuggestions] = useState([]);
  const [searchtext, setSearchText] = useState('');
  const [searchOption, setSearchOption] = useState({ option: 'artist' });
  const history = useHistory();

  const onSelectionChange = (value, action) => {
    // This onchange function lets user choose between the 2 options, either search by id or by name
    setSearchOption({ [action.name]: value.value });
  };
  const options = [
    //  The options for select
    { value: 'artist', label: 'Artist' },
    { value: 'artistid', label: 'Artist ID' },
  ];
  const onChangeHandler = (text) => {
    //Fetch data based on the user's selection and display in suggestions
    let matches = [];
    if (text.length > 0) {
      if (searchOption.option === 'artist') {
        //If artist is selected, use the below get command
        axios
          .get(
            process.env.REACT_APP_BRANDSINTOWN_DEFAULT_URL +
              `/artists/${text}?app_id=` +
              process.env.REACT_APP_BRANDSINTOWN_APP_ID
          )
          .then((res) => {
            console.log(res);
            setSuggestions(res.data);
          })
          .catch((err) => console.error(err));
      } else if (searchOption.option === 'artistid') {
        //If artist id is selected, use the below get command
        axios
          .get(
            process.env.REACT_APP_BRANDSINTOWN_DEFAULT_URL +
              `/artists/id_${text}?app_id=` +
              process.env.REACT_APP_BRANDSINTOWN_APP_ID
          )
          .then((res) => {
            console.log(res);
            setSuggestions(res.data);
          })
          .catch((err) => console.error(err));
      }
    } else {
      setSuggestions([]);
    }
    setSuggestions(matches); //set suggestions
    setSearchText(text); //set search text
  };
  const onSuggestHandler = (text) => {
    //Suggestion handler
    setSearchText(text);
    setSuggestions([]);
  };
  const onSearchSubmit = (e) => {
    //On form submit
    //If artist is selected, send artist=true in the search url and viceversa
    e.preventDefault();
    if (searchOption.option === 'artist') {
      history.push('/search?s=' + searchtext + '&artist=true');
    } else if (searchOption.option === 'artistid') {
      history.push('/search?s=' + searchtext + '&artistid=true');
    }
  };

  return (
    <>
      {/*Slider starts here*/}
      <Slider
        className="slider-area slider-style-4 variation-2 slider-dot rn-slick-dot rn-slick-arrow"
        {...BannerActivation}
      >
        {BannerData.map((data, index) => (
          <div key={index} className="single-slide">
            <div
              className="bg_image"
              style={{
                height: '100vh',
                backgroundImage: `url(${process.env.PUBLIC_URL} ${data.image})`,
              }}
            />
          </div>
        ))}
      </Slider>
      {/*Slider ends here*/}

      {/*Search input starts here*/}
      <div className="blog-search offset-sm-2 col-sm-8">
        <form onSubmit={(e) => onSearchSubmit(e)}>
          <InputGroup>
            <Select
              name="option"
              options={options}
              styles={customStyles}
              onChange={onSelectionChange}
              defaultValue={{ label: 'Artist', value: 'artist' }}
            />
            <Form.Control
              required={true}
              style={{ 'font-size': '14px', 'box-shadow': 'none !important' }}
              autoComplete="off"
              className="shadow-none"
              type="text"
              placeholder="Search Here..."
              name="s"
              onChange={(e) => onChangeHandler(e.target.value)}
              value={searchtext}
            />
            <Button type="submit" className="btn-info" style={{ padding: '15px' }}>
              <BsSearch size="18" />
            </Button>
          </InputGroup>
        </form>
        {/*Suggestions starts here*/}
        {suggestions && suggestions.length !== 0 ? (
          <div
            className="suggestions ml--55 pl-3"
            onClick={() => onSuggestHandler(suggestions.name)}
          >
            <span style={{ 'font-size': '12px' }}>
              <AiOutlineSearch className="mb-1" size={15} />
              {'  '}
              {suggestions.name}
            </span>
          </div>
        ) : null}
        {/*  Suggestions ends here*/}
      </div>

      {/*Search input ends here*/}
    </>
  );
};
export default HomepageSlider;
