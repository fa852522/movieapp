import React, { useContext, useState } from 'react'
import { GlobalData } from './createcontext';
import Movies from './Movies';
import Search from './Search';
import ToggleSwitch from './ToggleSwitch';


const Home = () => {
  


  return (
     <>
     <Search></Search>
     <Movies/>
    </>
  )
}

export default Home