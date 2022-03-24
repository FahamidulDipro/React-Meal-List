import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';
import './MealLoad.css';
const MealLoad = () => {
    const [meals,setMeal] = useState([]);
    const [mealName,setMealDetails] = useState([]);
    const [mealInstructions,setMealInstructions] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a').then(res=>res.json()).then(data=>setMeal(data.meals))
    },[])
    const handleMealDetails = (meal)=>{
        // console.log(meal);
        const mealName = meal.strMeal;
        const mealInstructions = meal.strInstructions;
        setMealDetails(mealName);
        setMealInstructions(mealInstructions);
        
    }

    return (
        <section className='mealLoadSection'>
        <div className='AllMealsContainer'>
            {
                meals.map(meal=><Meals  key={meal.idMeal} meal={meal} handler={()=>handleMealDetails(meal)}></Meals>)
            }
        </div>
        <div className='mealDetailsContainer'>
                <h2>{mealName}</h2>
                <h3>Instructions</h3>
                <p>{mealInstructions}</p>
        </div>
        </section>
       
    );
};

export default MealLoad;