import React from 'react'
import './about.scss'
const Skills =()=>{
    const skillList=[
        "Learn new recipies",
        "Experiment with food",
        "Write your own recepies",
        "Known nutritions facts",
        "Get cooking tips",
        "Get ranked",
    ]
    return(
        <>
            <div className='main margin'>
                <div className='aboutus'>
                    <img className='skillImg' src='/img/gallery/img_10.jpg' alt='sushi'></img>
                </div>
                <div className='aboutus'>
                    <h1>Improve Your Culinary Skills</h1>
                    {
                        skillList.map((data,index)=>{
                            return(
                                <>
                                    <div className='listSkills' key={index}><h6>{data}</h6></div>
                                </>
                            )
                        })
                    }
                    <button className='bttn'>SignUp Now</button>
                </div>   
            </div>        
        </>
    )
}
export default Skills