import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../views/Home'
import { Projects } from '../views/Projects'

export const NavRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Home />} />
        </Routes>
    )
}
