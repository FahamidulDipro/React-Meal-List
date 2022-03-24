import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import React, { useState } from 'react';
import MealLoad from '../MealLoad/MealLoad';
import './Search.css';
import Warning from '../Warning/Warning';
const Search = () => {
    const [value,setValue] = useState('');
    const searchEvent = ()=>{
         console.log(value);
    }
    const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />
    
    return (
        <div className='searchContainer' id='search'>
            <h1>Search</h1>
            <input type="text" value={value} onChange={(e) => {setValue(e.target.value)}} className="searchInputField"/>
            {/* <input type="button" value={searchIcon} onClick={searchEvent} className="search-btn"/> */}
            <button className="search-btn" onClick={searchEvent}>{searchIcon}</button>


            {
            
            (() => {
                if (value !== '') {
                return (
                    <MealLoad letter={value}></MealLoad>
                )
                }  else {
                return (
                   <Warning></Warning>
                )
                }
            })()
      
      }
           
        </div>
    );
};

export default Search;