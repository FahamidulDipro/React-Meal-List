import React from 'react';
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
       <div >
         <h3>Meal List</h3>
       </div>
       <ul className='navbarMenu'> 
         <li><a href="#">Home</a></li>
         <li><a href="#">Meals</a></li>
         <li><a href="#">Contact</a></li>
       </ul>
     </nav> 
        </div>
    );
};

export default Navbar;