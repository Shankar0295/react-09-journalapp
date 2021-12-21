import { FaPen, FaUtensils, FaBed, FaClipboardList, FaSignOutAlt } from "react-icons/fa";

export const SidebarData = [
    {
        title: 'Journal',
        path: '/journal',
        icon: <FaPen />,
        cName: 'nav-text'
    },
    {
        title: 'Sleep Tracker',
        path: '/sleep-tracker',
        icon: <FaBed />,
        cName: 'nav-text'
    },
    {
        title: 'Meal Tracker',
        path: '/meal-tracker',
        icon: <FaUtensils />,
        cName: 'nav-text'
    },
    {
        title: 'Todo list',
        path: '/todos',
        icon: <FaClipboardList />,
        cName: 'nav-text'
    },
    {
        title: 'LogOut',
        path: '/',
        icon: <FaSignOutAlt />,
        cName: 'nav-text'
    },

];