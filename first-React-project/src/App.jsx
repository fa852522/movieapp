import React, { useEffect, useRef, useState } from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './component/Home';
import Movies from './component/Movies';
import Search from './component/Search.jsx';
import SingleMovies from './component/SingleMovies';
import error from './component/error.jsx';

function App() {
     

      
       
    return (
        <>
          <Router>
            <Routes>
               <Route path='/' element= {<Home/>}/>
               <Route path='movie/:id' element= {<SingleMovies/>}/>
               <Route path='*' element= {<error/>}/>
            </Routes>



          </Router>
        </>
        
    );
}

export default App;
