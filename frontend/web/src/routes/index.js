import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../views/Home';
import Task from '../views/Task';
import QrCode from '../views/QrCode';

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/task' element={<Task></Task>}></Route>
                <Route path='/task/:id' element={<Task></Task>}></Route>
                <Route path='/qrcode' element={<QrCode></QrCode>}></Route>
            </Routes>
        </BrowserRouter>
    );
}