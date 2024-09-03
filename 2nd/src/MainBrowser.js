import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home"
import { Search } from "./Search"

export const MainBrowser = () => {
    return (
        <div className="main">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/search' element={<Search />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}