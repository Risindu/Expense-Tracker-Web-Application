import React, { useState } from 'react';
import './Navbar.css';
import coin from '../Assets/coin.png';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [active, setActive] = useState("nav_menu");
    const navigate = useNavigate();

    const navToggle = () => {
        setActive(active === "nav_menu" ? "nav_menu nav_active" : "nav_menu");
    };

    const handleLogout = () => {
        // Clear cookies
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        // Navigate to login page
        navigate('/login');
    }

    return (
        <nav className="nav">
            <img src={coin} alt="coin" className='img1'/>
            <ul className={active}>
                <li className="nav_item">
                    <a href="/home" className="nav_link">HOME</a>
                </li>
                <li className="nav_item">
                    <a href="/transaction" className="nav_link">TRANSACTION</a>
                </li>
                <li className="nav_item">
                    <a href="/contact" className="nav_link">CONTACT</a>
                </li>
            </ul>

            <div className="button">
                <button className='nav-out' onClick={handleLogout}>Log Out</button>
            </div>
        </nav>
    );
}
