import React from 'react'

const Chefs = () => {
  const chefList=[
    {
      img:"/img/top-chiefs/img_1.jpg",
      name:"Aarambha Thapa",
      recipe:"18",
      cusine:"Nepali",
  },
  {
      img:"/img/top-chiefs/img_2.jpg",
      name:"Hamaz max",
      recipe:"12",
      cusine:"Turkish",
  },
  {
      img:"/img/top-chiefs/img_3.jpg",
      name:"Jason Michale",
      recipe:"11",
      cusine:"Mexican",
  },
  {
      img:"/img/top-chiefs/img_4.jpg",
      name:"Rasmi Rami",
      recipe:"15",
      cusine:"Indian",
  },
  {
      img:"/img/top-chiefs/img_5.jpg",
      name:"Jasmir Zanee",
      recipe:"16",
      cusine:"Pak",
  },
  {
      img:"/img/top-chiefs/img_6.jpg",
      name:"Borat Boat",
      recipe:"122",
      cusine:"Kazaksthani",
  },
  ]
  return (
    <>
      <div className='chefBox'>
        <div className='title'>Our Top Chefs</div>
    </div>
    <div className='chefBox'>
      <div className='chefList'>
        {
          chefList.map((data,index)=>{
            return(
              <SingleChef key={index} {...data}></SingleChef>
            )
          })
        }
      </div>
    </div>
    </>

  )
}
export default Chefs
const SingleChef=({img,name,recipe,cusine})=>{
  return(
      <div className='singleChef'>
        <img src={img} alt="chef"></img>
        <div className='info'>
          <h5>{name}</h5>
          <h6>Recipe: <span>{recipe}</span></h6>
          <h6>Cusine: <span>{cusine}</span></h6>
          <div className='logo'>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
  )
 }