import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';
import './MealLoad.css';
const MealLoad = () => {
    const [meals,setMeal] = useState([]);
    const [mealDetails,setMealDetails] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a').then(res=>res.json()).then(data=>setMeal(data.meals))
    },[])
    const handleMealDetails = (meal)=>{
        // console.log(meal);
        const newMeals = [...meal];
        setMealDetails(newMeals);
        
    }

    return (
        <section className='mealLoadSection'>
        <div className='AllMealsContainer'>
            {
                meals.map(meal=><Meals  key={meal.idMeal} meal={meal} handler={()=>handleMealDetails(meal.strInstructions)}></Meals>)
            }
        </div>
        <div className='mealDetailsContainer'>
                <h2>Meal Details</h2>
                <p>{mealDetails}</p>
        </div>
        </section>
       
    );
};

export default MealLoad;