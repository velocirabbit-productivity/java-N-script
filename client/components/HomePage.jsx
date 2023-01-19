import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom'
import '../stylesheets/homepage.css'

export default function HomePage(props) {
  const initSearchOptions = {
    quality_meals: 1,
    quality_drinks: 1,
    space: 1,
    sound: 1,
    outlets: 1,
    parking: 1,
    wifi: 1,
    shopname: ''
  };
  const [searchOptions, setSearchOptions] = useState(initSearchOptions);
  const { quality_meals, quality_drinks, space, sound, outlets, parking, wifi, shopname } = searchOptions;
  const { username } = useLocation().state;

  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setSearchOptions(Object.assign({}, searchOptions, {[name]: value}));
  }

  return (
    <div className="homePageForms">
      <div className="searchByCriteriaForms">
        <form>
            <label>Minimum rating for: </label>
            <br/>
          <label>
            Meal quality: 
            <input type='number' min = '0' max = '5' name='quality_meals' value={quality_meals} onChange={handleChange} />
          </label>
          <br/>
          <label>
            Drink quality: 
            <input type='number' min = '0' max = '5' name='quality_drinks' value={quality_drinks} onChange={handleChange} />
          </label>
          <br />
          <label>
            Atmosphere: 
            <input type='number' min = '0' max = '5' name='space' value={space} onChange={handleChange} />
          </label>
          <br />
          <label>
            Noise level: 
            <input type='number' min = '0' max = '5' name='sound' value={sound} onChange={handleChange} />
          </label>
          <br />
          <label>
            Outlet availability: 
            <input type='number' min = '0' max = '5' name='outlets' value={outlets} onChange={handleChange} />
          </label>
          <br />
          <label>
            Parking options: 
            <input type='number' min = '0' max = '5' name='parking' value={parking} onChange={handleChange} />
          </label>
          <br />
          <label>
            WIFI quality: 
            <input type='number' min = '0' max = '5' name='wifi' value={wifi} onChange={handleChange} />
          </label>
          <br />
          <br/>
        </form>
      </div>
      <div className="homepageSearchForm">
        <input type='text' className="search-bar" name='shopname' value={shopname} onChange={handleChange} placeholder="Search coffee shop name..." />
          <Link to={'/shoplist'} state={{from: {...searchOptions, username}}} >
            <button className="search-bar-button">
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" height="1.0em" width="1.0em" xmlns="http://www.w3.org/2000/svg">
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
              </svg>
            </button>
          </Link>
      </div>
    </div>
  ) 
}
