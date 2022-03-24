import React from 'react';
import './Meals.css';
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
          <button className='Btn' onClick={handler}>See Details</button>
          
        </div>
    );
};

export default Meals;