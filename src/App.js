import React from 'react'
import Home from './pages/Home'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Recipe from './pages/Recipe'
import Settings from './pages/Settings'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import FullRecipe from './pages/FullRecipe'
import Error from './pages/Error'
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
          <Route path='*' element={<Error/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>      
    </div>
  )
}

export default App
