import React from 'react'
import Home from './pages/Home'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Recipe from './pages/Recipe'
import Settings from './pages/Settings'
import FullRecipe from './pages/FullRecipe'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/recipe' element={<Recipe/>}></Route>
          <Route path='/recipe/:id' element={<FullRecipe/>}></Route>
          <Route path='/settings' element={<Settings/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
