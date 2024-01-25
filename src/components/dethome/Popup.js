import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signin2 from './Signin'
import Joinin2 from './Joinin'
import Popnav2 from './Popnav'

const Popup2 = () => {
  return (
    <div>
      <Router>
        <Popnav2/>
        <Routes>
            <Route exact path='/' element={<Signin2/>}/>
            <Route exact path='/joinin' element={<Joinin2/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Popup2
