import React from 'react'

const About = () => {
  const Imglist=[
    "/img/gallery/img_1.jpg",
    "/img/gallery/img_2.jpg",
    "/img/gallery/img_3.jpg",
    "/img/gallery/img_4.jpg",
    "/img/gallery/img_5.jpg",
    "/img/gallery/img_6.jpg",
    "/img/gallery/img_7.jpg",
    "/img/gallery/img_8.jpg",
    "/img/gallery/img_9.jpg",
  ]
  return (
    <div className='main margin'>
        <div className='aboutus'>
          <h1>What Are We About</h1>
          <p>
            FoodisHub is a place where you can please
            your soul and tame with delicous food
            Recepies of all culsine. And our service Is
            absolutely free. So start exploring now.
          </p>
          <button className='bttn'>Explore Now</button>
        </div>
        <div className='photogallery'>
          {
            Imglist.map((e,index)=>{
              return<>
                  <CustomImg key={index} src={e}></CustomImg>
                </>
            })
          }
        </div>
      
    </div>
  )
}

export default About
const CustomImg=({src})=>{
  return (
    <>
      <div className='Imgbox'>
          <img src={src} alt="dish"/>
      </div>
    </>
  )
}