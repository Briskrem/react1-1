import { useState } from 'react';

import './Sidebar.css';


export const Sidebar = ({ isActive}) => {

    return (
        <div className="Sidebar" style={{ left : isActive ? '-300px' : '-800px'}} > 
            side nav
        </div>
    )
}