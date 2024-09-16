import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Navbar } from './Navbar';
import { Search } from './Search';
import { Sidebar } from './Sidebar';
import { useState } from 'react';

export const MainRoutes = () => {

    const [isActive, setIsActive] = useState(false)

    const toggleSideBar = () => setIsActive(!isActive);
    return (
        <div>
            <BrowserRouter >
            <Navbar shiftSideBar={toggleSideBar} />
            <Sidebar isActive={isActive}/>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/search' element={<Search />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}