import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/home/Home'
import List from '../../pages/list/List'
import Single from '../../pages/single/Single'
import ListProd from '../../pages/list/ListProd'
import SingleProd from '../../pages/single/SingleProd'
import New from '../../pages/new/New'
import ListCategory from '../../pages/list/ListCategory'
import SingleCategory from '../../pages/single/SingleCategory'
import NewCategory from '../../pages/new/NewCategory'

const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/users" element={<List />} />
                <Route path="/user/:id" element={<Single />} />

                <Route path="/products" element={< ListProd/>} />
                <Route path="/product/:id" element={< SingleProd/>} />
                <Route path="/product/new" element={< New/>} />

                <Route path='/categories' element={<ListCategory/>}/>
                <Route path="/category/:id" element={< SingleCategory/>} />
                <Route path="/category/new" element={< NewCategory/>} />
            </Routes>
        </div>
    )
}

export default Routers