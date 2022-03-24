import React from 'react';
import './Meals.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Meals = (props) => {
    const {strMeal,strMealThumb,strCategory,strTags,strInstructions,strArea} = props.meal;
    const {handler} = props;
    return (
        <div className='MealContainer'>
         <h2>{strMeal}</h2>
         <div className='mealImg'>
             <img src={strMealThumb} alt="mealPic" />
         </div>
          <p><b>Catagory: </b>{strCategory}</p>
          <p><b>Tags: </b>{strTags}</p>
          <p><b>Area: </b>{strArea}</p>
         <a href='#meal-name'><button className='Btn' onClick={handler}>See Details  &nbsp;<FontAwesomeIcon icon={faArrowRight} /></button></a>
           
          
        </div>
    );
};

export default Meals;