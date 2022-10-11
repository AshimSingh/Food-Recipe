import React from 'react'
import {useState,useEffect} from 'react'

export const useFetchData = (id) => {
    const [data,setData]=useState([])
  
  const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
  params: {id},
  headers: {
    'X-RapidAPI-Key': '5025fce6c4msh3d099df4216ce00p193360jsn59793cb562eb',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};

useEffect(()=>{
  axios.request(options).then(function (response) {
	// console.log(response.data);
  setData(response.data)
}).catch(function (error) {
	console.error(error);
});
},[id])
  
    return{data}
}
