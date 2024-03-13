// import index from './index.css';
import './App.css';
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home.js';
import Create from './Create.js';
import Edit from './Edit.js';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Create' element={<Create />} />
            <Route path='/Edit/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    )
  }

export default App;
