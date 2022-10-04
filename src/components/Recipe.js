import React from 'react'

const Recipe = () => {
  return (
    <div className='chefBox'>
        <div className='fullRecipe margin'>
        <img src='/img/gallery/img_1.jpg' alt='momo'></img>
        <h1 style={{margin:'20px 0px'}}>Nepali Style Momo</h1>
        <h3>Ingredents:</h3>
        <ul>
            <li>Maida</li>
        <li>Cabbage</li>
        <li>Onion</li>
        <li>Oil</li>
        <li>Tomato</li>
        </ul>
        <h3>Recipe:</h3>
        <p>
            WARNING in [eslint]
Compiled with warnings.

[eslint]
src\components\Recipe.js
  Line 7:9:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

WARNING in [eslint]
Compiled with warnings.
        </p>
        </div>
      
    </div>
  )
}

export default Recipe
