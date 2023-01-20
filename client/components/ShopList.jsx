import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import '../stylesheets/shoplist.css';
import Shop from "./Shop";

const ShopList = props => {

  const[matches, setMatches] = useState([]);
  const location = useLocation();
  console.log(location);
  const { from } = location.state;
  const { quality_meals, quality_drinks, space, sound, outlets, parking, wifi, shopname, username } = from;  
  console.log('from: ', from);
  console.log('current user from shoplist: ' + location.state.from);
  
  const fetchShopMatches = () => {
    const query = `?quality_meals=${quality_meals}&quality_drinks=${quality_drinks}&space=${space}&sound=${sound}&outlets=${outlets}&parking=${parking}&wifi=${wifi}&shopname=${shopname}`;
    fetch(`/api/coffee/${query}`)
      .then(res => res.json())
      .then(res => {
        console.log(res); // array of objects [{}, {}]
        setMatches(res);
      })
  }
  useEffect(() => {
    fetchShopMatches();
  }, []);


  return (
    <div className="shopListContainer">
      <h1>List of all shops</h1>
      <div className="matches">
        {matches.map((shop) => {
          //after backend updates db, should rename to shopname
          const { drinks, food, name:shopname, outlets, parking, sound, space, wifi, _id } = shop;
          
          return <Shop 
                 drinks={drinks}
                 food={food}
                 shopname={shopname}
                 outlets={outlets}
                 parking={parking}
                 sound={sound}
                 space={space}
                 wifi={wifi}
                 shopId={_id}
                 key={`shop${_id}`}
                 fetchShopMatches={fetchShopMatches}
                currentUser = {username}
          />
        })}
      </div>
    </div>

  )
}

export default ShopList;