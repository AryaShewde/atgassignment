import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signin from './Signin'
import Joinin from './Joinin'
import Popnav from './Popnav'

const Popup = () => {
  return (
    <div>
      <Router>
        <Popnav/>
        <Routes>
            <Route exact path='/' element={<Signin/>}/>
            <Route exact path='/joinin' element={<Joinin/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Popup
