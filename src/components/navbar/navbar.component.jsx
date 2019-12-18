import React from 'react'
import './navbar.styles.scss';
import { NavLink } from 'react-router-dom';



const NavBar = () => (
    <div className='container-fluid navbarlarge-container fixed-top'>
        <div className='row navbarlarge-container-row'>
            <div className='col-2 navbarlarge-container-row-left-col'>
                <NavLink className="navbar-brand" to='/'><i className="fas fa-dragon"></i><span className='brand-span'>Red Dragon Music Co.</span></NavLink>
            </div>
            <div className='col-8 navbarlarge-container-row-middle-col'>
                <NavLink className="nav-link"  to='/instruments' >Instruments<span className="sr-only">(current)</span></NavLink>
                <NavLink className="nav-link" to='/lessons' >Lessons<span className="sr-only">(current)</span></NavLink>    
                <NavLink className="nav-link" to='/specials' >Specials<span className="sr-only">(current)</span></NavLink>       
   
            </div>
            <div className='col-2 navbarlarge-container-row-right-col'> 
                <NavLink className="nav-link" to='/account'><span className="sr-only">(current)</span><i className="fas fa-user-alt sign-in-logo"><span className='sign-in-logo-text'>Account<br /> Sign In</span></i></NavLink>  
                <NavLink className="nav-link" to='/account'><span className="sr-only">(current)</span><i class="fas fa-cart-arrow-down cart-logo"><span className='cart-logo-text'>Cart &#9660;</span></i></NavLink>
            </div>
        </div>
    </div>

);



export default NavBar 
