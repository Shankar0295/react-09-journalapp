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
                    <Link to="/journal"><FaPen /><span className="ml-16">Journal</span></Link>
                    <Link to="/sleep-tracker"><FaBed /><span className="ml-16">Sleep Tracker</span></Link>
                    <Link to="/meal-tracker"><FaUtensils /><span className="ml-16">Meal Tracker</span></Link>
                    <Link to="/todos"><FaClipboardList /><span className="ml-16">Todo List</span></Link>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default NavBar