import React from 'react';
import './NavBar.css';
import { FaPen, FaUtensils, FaBed, FaClipboardList } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';


const NavBar = () => {
    return (
        <>
            <IconContext.Provider value={{ color: '#000' }}>
                <div className="sidebar">
                    <Link to="/journal"><FaPen /><span>Journal</span></Link>
                    <Link to="/sleep-tracker"><FaBed /><span>Sleep Tracker</span></Link>
                    <Link to="/meal-tracker"><FaUtensils /><span>Meal Tracker</span></Link>
                    <Link to="/todos"><FaClipboardList /><span>Todo List</span></Link>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default NavBar