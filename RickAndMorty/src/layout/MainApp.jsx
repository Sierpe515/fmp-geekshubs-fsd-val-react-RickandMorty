import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { Navbar1 } from '../componentes/Navbar1';
// import { NavBar } from '../components/NavBar';
import { About } from './About';
import { Detail } from './Detail';
import { Home } from './Home';
import { Login } from './Login';
import { NewCharacter } from './NewCharacter';
import { Register } from './Register';


export const MainApp = () => {
  return (
    <>

    {/* <Link to='/'>Home</Link>
    <Link to='/login'>About</Link>
    <Link to='/about'>About</Link> */}

    <Navbar1 />

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/newCharacter' element={<NewCharacter/>}/>
    </Routes>
    </>
  )
}