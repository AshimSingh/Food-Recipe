import React, { useEffect } from 'react'
import {useState} from 'react'
import { useSearch } from './useSearch'
import RecipeList from './recipeList'
const Suggestion = () => {
    const suggestionList=[
        "Pizza",
        "Burger",
        "Biryani",
        "Momo",
        "Icecream",
        "Chiya",
        "Soup",
        "Cookies",
        "Pudding",
        "Sandwich",
        "Dosa",
        "Chicken Chilly",
        "Choila",
        "Ice Tea",
    ]
      const [search,setSearch]=useState('')
    const handelSubmit=(e)=>{
      
      e.preventDefault()
      if(search){
        
      }
      else{
        console.log("empty parms")
      }
    }

    const btn=(val)=>{
      setSearch(val)
    }
  
  return (
   <>
    <div className='chefBox'>
      <div className='suggestion margin'>
        <h3>Suggestion</h3>
        <div className='buttonList'>
            {
                suggestionList.map((data,index)=>{
                    return(
                        <button key={index} className='btn-List' onClick={()=>btn(data)}>{data}</button>
                    )
                })
            }  
            
        </div>
        <div className='searchBox'>
           <form onSubmit={handelSubmit}>
              <div className='sBox'> 
                <input type="Text" placeholder="Search"
                  value={search}
                  onChange={(e)=>setSearch(e.target.value)}
                ></input>
                <button className='bttn' type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
           </form>
           {
                          
            }
        </div>
      </div>
    </div>
    {/* <RecipeList {...result}></RecipeList> */}
    </>
  )
}
export default Suggestion
