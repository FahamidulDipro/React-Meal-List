import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';
import Error from '../Warning/Error';
import './MealLoad.css';
const MealLoad = (props) => {
    const [meals,setMeal] = useState([]);
    const [mealName,setMealDetails] = useState([]);
    const [mealInstructions,setMealInstructions] = useState([]);
    const [mealPic,setMealPic] = useState([]);
    // const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
    // const newUrl = url+props.letter;
    // console.log(newUrl);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+props.letter).then(res=>res.json()).then(data=>setMeal(data.meals))
    },[props.letter])
    const handleMealDetails = (meal)=>{
        // console.log(meal);
        const mealName = meal.strMeal;
        const mealInstructions = meal.strInstructions;
        const mealPic = meal.strMealThumb;
        setMealDetails(mealName);
        setMealInstructions(mealInstructions);
        setMealPic(mealPic);
        
        
    }

    return (
    (() => {
        if (meals !== null) {
        return (
            <section className='mealLoadSection'>
                <div className='AllMealsContainer'>
                        {
                            meals.map(meal=><Meals  key={meal.idMeal} meal={meal} handler={()=>handleMealDetails(meal)}></Meals>)
                        }
                 </div>
                <div className='mealDetailsContainer'>
                        <h2 id='meal-name'>{mealName}</h2>
                        <div className='mealPic-container'>
                            <img src={mealPic} alt="mealImage" />
                        </div>
                        <h3>Instructions</h3>
                        <p>{mealInstructions}</p>
                        <a href="#search" className='goToTopBtn'><FontAwesomeIcon icon={faArrowCircleUp}/></a>
                </div>
            </section>
             
        )
        }  else {
        return (
        <Error></Error>
        )
        }
    })()

    );
};

export default MealLoad;