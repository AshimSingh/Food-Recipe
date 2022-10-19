import React from 'react'
import {useState,useEffect} from 'react'
const Settingsblock = () => {
  const [font,setFont] = useState(1)
  const [select,setSelect]=useState(0)
  const [settings,setSettings] = useState({
    "--background-color": "#fff",
    "--background-light": "#fff",
    "--shadow-color":"rgba(0,0,0,0.2)",
    "--primary-color":"rgb(255,0,56)",
    "--text-color":"#0a0a0a",
    "--text-light":"#575757",
    "--font-size":"25px",
    "--amination-speed":"1"
  })
   const primaryColor =[
        "rgb(255, 0, 86 )",
        "rgb(255, 193, 7 )",
        "rgb(0, 200, 83 )",
        "rgb(156, 39, 176 )",
    ]
    const fontSize = [
    {
      title:'small',
      size:"18px"
    },
    {
      title:"medium",
      size:"25px"
    },
    {
      title:"large",
      size:"30px"
    }
  ]
  const themes =[
    {
      "--background-color": "#fff",
    "--background-light": "#fff",
    "--shadow-color":"rgba(0,0,0,0.2)",
    "--primary-color":"rgb(255,0,56)",
    "--text-color":"#0a0a0a",
    "--text-light":"#575757",
    },
    {
      "--background-color": "rgb(29,29,29)",
    "--background-light": "rgb(77,77,77)",
    "--shadow-color":"rgba(0,0,0,0.2)",
    "--primary-color":"rgb(255,0,56)",
    "--text-color":"#fff",
    "--text-light":"#eceaea",
    }
  ]
   const [theme,setTheme] =useState('light')



   useEffect(()=>{
        const root = document.documentElement
        for(let key in settings){
          root.style.setProperty(key,settings[key])
          // console.log(settings[key])
        }
  },[settings])


   function changeTheme(i){
    const _themes = {...themes[i]}
    setTheme(i===0?"light":"dark")
    let _settings ={...settings}
    for (let key in _settings){
      // console.log(_themes[key])
      _settings[key] = _themes[key]
    }
    setSettings(_settings)
   }


   function changeColor(i){
    const _color = primaryColor[i] 
    let _settings ={...settings}
    console.log(_settings["--primary-color"])
    // console.log(_color)
    _settings["--primary-color"]=_color

    setSettings(_settings)
    setSelect(i)
   }
   function changeFont(i){
    const _fontsize=fontSize[i]
    const _settings ={...settings}
    // _settings["--font-size"]=_fontsize.size
    // setSettings({_settings})
    
   
    _settings["--font-size"]=_fontsize.size
    setSettings(_settings) 
    setFont(i)
   }


  return (
    <div className='settingsBody'>
      <div className='chefBox'>
        <div className='block'>
            <h2>Preferred Color</h2>
           <div className='sblock'>
            <div className='colorBox light' onClick={()=>changeTheme(0)}>
                {theme==='light' && (
                    <i class="fa-solid fa-circle-check"></i>
                )
                }
            </div>
             <div className='colorBox dark' onClick={()=>changeTheme(1)}>
                    {theme==='dark' && (
                    <i class="fa-solid fa-circle-check"></i>
                )
                }
             </div>
           </div>
        </div>
      </div>
      <div className='chefBox'>
        <div className='block'>
            <h2>Primary Theme</h2>
           <div className='sblock'>
            
             {/* <div className='colorBox'></div>
             <div className='colorBox'></div>
             <div className='colorBox'></div>
             <div className='colorBox'></div> */}
             {primaryColor.map((color,index)=>{
                return(
                    <div key={index} className='colorBox multicolor' style={{backgroundColor:color}} onClick={()=>changeColor(index)}>
                        {select===index && (
                            <i class="fa-solid fa-circle-check"></i>
                        )}
                    </div>
                )
             })}
           </div>
        </div>
      </div>
      <div className='chefBox'>
        <div className='block'>
            <h2>Font Size</h2>
           <div className='sblock'>
                {/* <button className='sbtn'>Small {font==='small'?<i class="fa-solid fa-check"></i>:""}</button>
                <button className='sbtn'>Medium {font==='medium'?<i class="fa-solid fa-check"></i>:""}</button>
                <button className='sbtn'>Large {font==='large'?<i class="fa-solid fa-check"></i>:""}</button> */}
                {
                  fontSize.map((m,index)=>{
                    return(
                      <button  className='sbtn' onClick={()=>changeFont(index)}>{m.title} {font===index?<i class="fa-solid fa-check"></i>:""}</button>
                    )
                  })
                }
           </div>
        </div>
      </div>
    </div>
  )
}

export default Settingsblock
