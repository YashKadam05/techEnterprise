import React from 'react'
import './navbar.css'
import TEIcon from './TEIcon.png'
import { Link } from "react-router";
import profileIcon2 from './profileIcon2.png'

export default function Navbar(props) {

    // menuList.style.maxHeight == "0px"
    const toggleMenu = () => {
        if (menuList.style.maxHeight == "300px") {
            menuList.style.maxHeight = "0px";
            menuList.style.paddingBottom = "0px";
        }
        else {
            menuList.style.maxHeight = "300px";
            menuList.style.paddingBottom = "10px";
        }
    }
    const { auth } = props

    return (
        <>
            <div className="nav">
                <div className="logo">
                    <img src={TEIcon} alt="" />
                </div>
                <ul id="menuList">
                    <li><a href="#products">Products</a></li>
                    <li><a href="#services">Service</a></li>
                    <li><a href="#aboutus">About Us</a></li>

                        {!auth&&<Link to="/login">
                            <li id="navbarBtn">Login Now</li>
                        </Link>}

                        {auth&&<Link to="/profile">
                        <li id="navbarProf">
                            <img src={profileIcon2} alt="" />
                        </li>
                        </Link>}

                </ul>
                <div className="menu-bar">
                    <span className="material-symbols-outlined" onClick={toggleMenu}>
                        menu
                    </span>
                </div>
            </div>
        </>
    )
}
