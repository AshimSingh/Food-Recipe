import React from 'react'
import {useState,useEffect} from 'react'
import {useFetch} from "./useFetch"
// import {useFetch} from './useFetch'
const RecipeList = () => {
    
    const{List}=useFetch()
    const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
  params: {prefix: 'chicken'},
  headers: {
    'X-RapidAPI-Key': '6283a2ba79mshf2d0e5236e14210p17ac3bjsn375fc800db28',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
    // console.log(List)
  return (
    <div className='chefBox'>
      <div className='recipeList'>
        
        {
            List.map((m)=>{
              return(
                <RecipeBox {...m}></RecipeBox>
              )
            })
        }
      </div>
    </div>
  )
}
export default RecipeList
const RecipeBox=({name,thumbnail_url,description})=>{
    return(
        <div className='recipeBox'>
            <img src={thumbnail_url} alt="momo"></img>
            <h4>{name}</h4>
            <p>{description.substring(0,100)}...</p>
            </div>
    )
}
