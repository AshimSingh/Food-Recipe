import React from 'react'

const RecipeList = () => {
  return (
    <div className='chefBox'>
      <div className='recipeList'>
        <RecipeBox/>
        <RecipeBox/>
        <RecipeBox/>
      </div>
    </div>
  )
}
export default RecipeList
const RecipeBox=()=>{
    return(
        <div className='recipeBox'>
            <img src='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/1/10/0/DV2802_Nepali-Momo_s4x3.jpg.rend.hgtvcom.616.462.suffix/1515644556794.jpeg' alt="momo"></img>
            <h1>Nepali Momo</h1>
            <p>Momo are bite-size dumplings made with a spoonful of stuffing and stemed with keema which is mixture of very finely ch...</p>
            </div>
    )
}