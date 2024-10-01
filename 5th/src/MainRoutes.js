import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Container} from '@mui/material';

import { useState } from 'react';
import { Home } from './Home';
import { Search } from './Search';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export const MainRoutes = () => {

    const [sidebarActive, setSidebarActive] = useState(false);

    const toggleSideBar = () => setSidebarActive(!sidebarActive)
    

    return (
        <div>
            
            <BrowserRouter>
                <Navbar toggleSideBar={toggleSideBar}/>
                <Sidebar toggleSideBar={toggleSideBar} sidebarActive={sidebarActive} />
                <Container>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/search' element={<Search />} />
                    </Routes>
                </Container>
                    
            </BrowserRouter>
        </div>
    )
}