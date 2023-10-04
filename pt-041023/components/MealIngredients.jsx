import React, { useEffect, useState } from 'react'
import axios from 'axios';

const MealIngredients = () => {


    const [dataAPI, setDataAPI] = useState([])

    useEffect(() => {
      const apiUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
      axios.get(apiUrl)
        .then( response => setDataAPI(response.data.meals[0]))
        .catch(error => console.log("error deteceted",error))
    }, [])
    

    // La llamada API devuelve un objeto
    // Convierto el objeto con calve valor a un array que tambien tendrá clave valor. con .entries se crea un subarray por así decirlo.
    const arrayObj = Object.entries(dataAPI)

    // se filtra para sacar dentro de la clave [0] con .startsWith() que permite comparar el string y además que el valor [1] sea distinto de vacio.
    const ingredientes = arrayObj.filter((elementoActual)=>elementoActual[0].startsWith("strIngredient") && elementoActual[1]!=="")
    console.log("ingredientes",ingredientes)

    // Recorrer con .map para sacar listado

  return (
    <div>MealIngredients
        {/* {ingredientes} */}
    </div>
  )
}

export default MealIngredients