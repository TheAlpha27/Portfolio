import React from 'react'
import '../CSS/Navbar.css'
import { Link } from "react-router-dom"
import Section1 from './Section1'

function NavBar() {
    const toggle = () => {
        if (document.documentElement.getAttribute('data-theme') === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            // document.getElementById('waveD1').setAttribute('fill', '#b3b3b3');
            // document.getElementById('waveD2').setAttribute('fill', '#4b4b4b');
            document.getElementById('mode').className = 'far fa-moon icon'
            console.log(document.documentElement.getAttribute('data-theme'));
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            // document.getElementById('waveD1').setAttribute('fill', '#501650');
            // document.getElementById('waveD2').setAttribute('fill', '#8a228a');
            document.getElementById('mode').className = 'fas fa-sun icon'
            console.log(document.documentElement.getAttribute('data-theme'));
        }
    }
    return (
        <div className="nav">
            <Link className="navItem" to="/">
                Home
            </Link>
            <i onClick={toggle} id="mode" className="fas fa-sun icon"></i>
        </div>
    )
}

export default NavBar
