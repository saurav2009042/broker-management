import React from 'react';
import { FaBell, FaSearch, FaStar, FaUser } from 'react-icons/fa';
import tinubuLogo from '../../assets/tinubu-logo.png';
import './AppBar.css';

const AppBar: React.FC = () => {
    return (
        <header className='app-bar'>
            <div className='appbar-title-container'>
                <img src={tinubuLogo} alt='Tinubu Logo' className='appbar-title-logo' />
                <span className='appbar-title-text'>Credit Solution Vanilla</span>
            </div>
            <div className='right-section'>
                <div className='appbar-search-bar-container'>
                    <div className='appbar-search-bar'>
                        <FaSearch className='appbar-search-icon' />
                        <input id='appbar-search-bar' type='text' placeholder='Search...' />
                    </div>
                </div>
                <div className='appbar-icon-buttons-container'>
                    <div className='appbar-icon-button'>
                        <FaStar />
                    </div>
                    <div className='appbar-icon-button'>
                        <FaBell />
                    </div>
                    <div className='appbar-icon-button'>
                        <FaUser />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppBar;
