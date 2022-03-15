import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo2.png';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <nav className='navbar navbar-expand navbar-light bg-white py-2  sticky-top'>
            <div className="container">
                <Link to='/' className='navbar-brand'>
                    <img src={Logo} alt="Red onion logo" />
                </Link>        
            </div>
        </nav>
    );
};

export default Header;