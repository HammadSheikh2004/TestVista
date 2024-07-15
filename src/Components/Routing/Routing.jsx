import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Home />} />
            </Routes>
        </>
    )
}

export default Routing