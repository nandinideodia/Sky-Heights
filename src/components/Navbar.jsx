import React, { useState } from 'react';
import "./Navbar.css";
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => setClicked(!clicked);

    const closeMenu = () => setClicked(false);

    return (
        <div>
            <nav className='navbar-items'>
                <h1 className='navbar-logo'>Sky Heights</h1>
                <div className='menu-icons' onClick={handleClick}>
                    <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => (
                        <li key={index} onClick={closeMenu}>
                            <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i>{item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
