
import {useState,useEffect} from 'react'
export const useFetch=()=>{
    // const loading =[
        // {name:"ashim",food:"momo"},
    //     {name:"Hood",food:"momo"},
    // ]
    // return {loading}
    const[List,setList]=useState([])

    const axios = require("axios");
    const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {from: '0', size: '20', tags: 'under_30_minutes'},
    headers: {
        'X-RapidAPI-Key': 'd68de7f6camshe3304b937898240p152053jsnf41f0d144361',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
    };
    const fetch=async()=>{
        await axios.request(options).then(function (response) {
           setList(response.data.results)
            // console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
    useEffect(()=>{
        fetch()
    },[])
    
    return{List}
}