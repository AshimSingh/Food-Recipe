import React from 'react'
import {useState} from 'react'
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
    const [search,setSearch]=useState()
    console.log(search)
    const handelchange=(e)=>{
      e.preventDefault()
      console.log(search)
    }
  return (
    <div className='chefBox'>
      <div className='suggestion margin'>
        <h3>Suggestion</h3>
        <div className='buttonList'>
            {
                suggestionList.map((data,index)=>{
                    return(
                        <button className='btn-List'>{data}</button>
                    )
                })
            }  
        </div>
        <div className='searchBox'>
           <div className='sBox'> 
                <input type="Text" placeholder="Search"
                  value={search}
                  onchanged={handelchange}


                ></input>
                <i class="fa-solid fa-magnifying-glass"></i></div>
        </div>
      </div>
    </div>
  )
}

export default Suggestion
