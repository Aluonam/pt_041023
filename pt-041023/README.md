Sacar datos de un objeto {clave, valor}

https://www.themealdb.com/api/json/v1/1/random.php

1. Crear useState para guardar datos de la api
2. dentro de useEffect consumo api con axios
3. como la llamada api devuelve un objeto convierto el objeto en un array con clave, valor. con Object.entries(variable)
4. Filtra para sacar la clave que coinicide con el texto que busco y que ademas el valor no esté vacio. 
Usando .filter() .startsWith("text")
5. Se hace .map() para sacar el listado.

```javascript

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
    const listaIngredientes = ingredientes.map((elementoActual)=>{
        return(
            <ul>
                <li>{elementoActual}</li>
            </ul>
        )
    })
    
```