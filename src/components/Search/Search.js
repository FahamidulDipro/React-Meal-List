import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import React, { useState } from 'react';
import MealLoad from '../MealLoad/MealLoad';
import './Search.css';
const Search = () => {
    const [value,setValue] = useState('');
    const searchEvent = ()=>{
         
    }
    const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />
    return (
        <div className='searchContainer' id='search'>
            <h1>Search</h1>
            <input type="text" value={value} onChange={(e) => {setValue(e.target.value)}} className="searchInputField"/>
            {/* <input type="button" value={searchIcon} onClick={searchEvent} className="search-btn"/> */}
            <button className="search-btn">{searchIcon}</button>
            <MealLoad letter={value}></MealLoad>
        </div>
    );
};

export default Search;