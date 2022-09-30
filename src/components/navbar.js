import React from 'react'
import { useState } from 'react'
import { NavLink} from 'react-router-dom'

const Navbar = () => {

  const [value,setValue]=useState(true)
  const [menu,setmenu]=useState("fa-solid fa-bars")
  const Menu=()=>{
  const box=document.querySelector('.transparent-box')
  
  if(value){
    setmenu("fa-sharp fa-solid fa-xmark")
    document.querySelector('.navlist').style.right="0px"
    box.style.display='block'
    setValue(false)
  }
  else{
    setmenu('fa-solid fa-bars')
    document.querySelector('.navlist').style.right="-300px"
    box.style.display='none'
    setValue(true)
  
  }
}
  return (
    <>
    <div className='navbar'>
      <div className='container'>
        <div className='navTitle '>
          <a href='/'>F<span>oo</span>die Hub</a>
          </div>
      <nav>
        <ul className='navlist'>
          <li><NavLink className='nav-item' activeClassName="active" exact to="/" end>Home</NavLink></li>
          <li><NavLink className='nav-item' activeClassName="active" to="/recipe">Recipe</NavLink></li>
          <li><NavLink className='nav-item' activeClassName="active" to="/settings">Settings</NavLink></li>
        </ul>
      </nav>
      <div className='menu' onClick={()=>Menu()}>
        <i class={menu}></i>
      </div>
      </div>
    </div>
     <div className='transparent-box' onClick={()=>Menu()}></div>    
    </>
  )
}

export default Navbar
