import React from 'react';
import { FaBell, FaSearch, FaStar, FaUser } from 'react-icons/fa';
import tinubuLogo from '../../assets/tinubu-logo.png';
import './AppBar.css';

const AppBar: React.FC = () => {
    return (
        <header className='app-bar'>
            <div className='app-bar__title-container'>
                <img src={tinubuLogo} alt='Tinubu Logo' className='app-bar__title-logo' />
                <span className='app-bar__title-text'>Credit Solution Vanilla</span>
            </div>
            <div className='app-bar__right-section'>
                <div className='app-bar__search-bar-container'>
                    <div className='app-bar__search-bar'>
                        <FaSearch className='app-bar__search-icon' aria-label='Search' />
                        <input id='app-bar__search-bar' type='text' placeholder='Search...' aria-label='Search input' />
                    </div>
                </div>
                <div className='app-bar__icon-buttons-container'>
                    <div className='app-bar__icon-button' aria-label='Favorites'>
                        <FaStar />
                    </div>
                    <div className='app-bar__icon-button' aria-label='Notifications'>
                        <FaBell />
                    </div>
                    <div className='app-bar__icon-button' aria-label='User Profile'>
                        <FaUser />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppBar;
