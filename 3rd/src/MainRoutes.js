import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { Search } from "./Search"
import { Navbar } from "./Navbar"
import './MainRoutes.css';

export const MainRoutes = () => {
    return (
        <div className="MainRoutes" >
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/search' element={<Search/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}