import React, { useState } from 'react'
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../../data';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md'
const Navbar = () => {
    const [isNevShow, setIsNavShow] = useState(false);
    return (
        <nav>
            <div className="container nav_container">
                <Link to="/">
                    <img src={logo} className="logo" alt="Navbar Logo Image" />
                </Link>
                <ul className={`nav_links ${isNevShow ? 'show_nav' : 'hide_nav'}`}>
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({ isActive }) => isActive ? "active-nav" : ""}>{name} </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className="nav_toogle_icon" onClick={() => setIsNavShow(!isNevShow)}>
                    {
                        isNevShow ? <MdOutlineClose /> : <GoThreeBars />
                    }
                </button>
            </div>
        </nav >
    )
}

export default Navbar