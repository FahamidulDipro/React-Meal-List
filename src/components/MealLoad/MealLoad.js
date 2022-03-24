import React, { useEffect, useState } from 'react';

const MealLoad = () => {
    const [meals,setMeal] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a').then(res=>res.json()).then(data=>setMeal(data.meals))
    },[])

    return (
        <div>
            {
                meals.map(meal=>console.log(meal))
             
            //   console.log(meals)
            }
        </div>
    );
};

export default MealLoad;