import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Container} from '@mui/material';
import {useState} from 'react';
import { Navbar } from './Navbar';
import {SideNav} from './SideNav'
import { Home } from './Home';
import { Search } from './Search';
import { Register } from './Register';

export const MainRoutes = () => {

    const [activeSideNav, setActiveSideNav] = useState(false)

    const toggleActive = () => setActiveSideNav(!activeSideNav);
    
    return (
        <div className='MainRoutes'>
            <BrowserRouter>
                <Navbar toggleActive={toggleActive} />
                <SideNav toggleActive={toggleActive} activeSideNav={activeSideNav}/>
                <Container>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/register' element={<Register />}></Route>
                </Routes>
                </Container>
            </BrowserRouter>
        </div>
    )
}