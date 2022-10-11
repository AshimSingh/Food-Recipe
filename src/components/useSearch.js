import { useState,useEffect } from "react"

export const useSearch = (prefix) => {
  const [result,setResult]=useState([])
   useEffect(()=>{
    const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://recipesapi2.p.rapidapi.com/recipes/tomato%20soup',
  params: {maxRecipes: '2'},
  headers: {
    'X-RapidAPI-Key': 'd68de7f6camshe3304b937898240p152053jsnf41f0d144361',
    'X-RapidAPI-Host': 'recipesapi2.p.rapidapi.com'
  }
};


axios.request(options).then(function (response) {
	// console.log(response.data);
  setResult(response.data.data)
}).catch(function (error) {
	console.error(error);
});
   },[])
return{result}
}


