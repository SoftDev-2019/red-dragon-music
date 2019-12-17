import React from 'react'
import './navbar.styles.scss';
import { NavLink } from 'react-router-dom';



const NavBar = () => (
    <div className='container-fluid navbarlarge-container fixed-top'>
        <div className='row navbarlarge-container-row'>
            <div className='col-2 navbarlarge-container-row-left-col'>
                <NavLink className="navbar-brand" to='/homepage'><i className="fas fa-dragon"></i><span className='brand-span'></span></NavLink>
            </div>
            <div className='col-10 navbarlarge-container-row-right-col'>
                <NavLink className="nav-link"  to='/' >Instruments<span className="sr-only">(current)</span></NavLink>
                <NavLink className="nav-link" to='/' >Graphics<span className="sr-only">(current)</span></NavLink>     
                <NavLink className="nav-link" to='/'>Contact<span className="sr-only">(current)</span></NavLink>   
            </div>
        </div>
    </div>

);



export default NavBar 
