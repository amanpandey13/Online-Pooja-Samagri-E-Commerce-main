// @flow strict


import axios from 'axios';
import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';


function Navar() {
    const logoutUser = async () =>{
        localStorage.clear()
        window.location.href = "/";
        await axios.get('/user/logout')
    }

    return (<nav className='navbar sticky-top navbar-primary navbar-expand-sm bg-warning '> 
    <div className='container-fluid' >
        <img src={logo} alt="brand-logo" width={"50px"}  className=" bg-secondry " />
        <Link className='navbar-brand' to='/'><h4>Online Pooja Samagri</h4></Link>



        <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target='#cnavbar'>
            <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse justify-content-end'  id='cnavbar'>
            <ul className='navbar-nav'>
            < li className='nav-item p-2 ' >
                <Link className='nav-link' to='/'><h4>Home</h4></Link>
            </li>
            <li className='nav-item p-2'>
                <Link className='nav-link' to='/Pooja'><h4>Services</h4></Link>
            </li>
            <li className='nav-item p-2'>
                <Link className='nav-link' to='/BookPriest'><h4>Book Priest</h4></Link>
            </li>
        
            < li className='nav-item p-2'>
                <Link className='nav-link' to='/Ordrers'><h4>Order</h4></Link>
            </li>
            <li className='nav-item p-2'>
                <Link className='nav-link' to='/Profile'><h4>Profile</h4></Link>
            </li>
            <li className='nav-item p-2'>
                <Link className='nav-link' onClick={logoutUser} to='/'><h4>Logout</h4></Link>
            </li>
           
        </ul>

            </div>
       
    </div>
    </nav>
 
    );
};

export default Navar;