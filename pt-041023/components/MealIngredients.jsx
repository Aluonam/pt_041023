import React, { useEffect, useState } from 'react'
import axios from 'axios';

const MealIngredients = () => {


    const [dataAPI, setDataAPI] = useState([])

    useEffect(() => {
      const apiUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
      axios.get(apiUrl)
        .then( response => console.log(response.data.meals))
        .catch(error => console.log("error deteceted",error))
    }, [])
    


  return (
    <div>MealIngredients</div>
  )
}

export default MealIngredients