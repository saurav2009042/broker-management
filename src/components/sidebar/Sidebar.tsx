import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { ESidebarOptions } from '../../enums';
import { ISidebarProps } from '../../interfaces';
import './Sidebar.css';

const Sidebar: React.FC<ISidebarProps> = ({ onItemClick }) => {
    const [selectedItem, setSelectedItem] = useState<string>('quotations');

    const handleItemClick = (page: string) => {
        setSelectedItem(page);
        onItemClick(page);
    };

    return (
        <aside className='sidebar'>
            <ul className='sidebar__list'>
                <li className={`sidebar__item ${selectedItem === 'dashboard' ? 'sidebar__item--selected' : ''}`}
                    onClick={() => handleItemClick('dashboard')}>
                    <FaStar className='sidebar__icon' />
                    {ESidebarOptions.DASHBOARD}
                </li>
                <li className={`sidebar__item ${selectedItem === 'submissions' ? 'sidebar__item--selected' : ''}`}
                    onClick={() => handleItemClick('submissions')}>
                    <FaStar className='sidebar__icon' />
                    {ESidebarOptions.SUBMISSIONS}
                </li>
                <li className={`sidebar__item ${selectedItem === 'quotations' ? 'sidebar__item--selected' : ''}`}
                    onClick={() => handleItemClick('quotations')}>
                    <FaStar className='sidebar__icon' />
                    {ESidebarOptions.QUOTATIONS}
                </li>
                <li className={`sidebar__item ${selectedItem === 'policies' ? 'sidebar__item--selected' : ''}`}
                    onClick={() => handleItemClick('policies')}>
                    <FaStar className='sidebar__icon' />
                    {ESidebarOptions.POLICIES}
                </li>
                <li className={`sidebar__item ${selectedItem === 'audit' ? 'sidebar__item--selected' : ''}`}
                    onClick={() => handleItemClick('audit')}>
                    <FaStar className='sidebar__icon' />
                    {ESidebarOptions.AUDIT_LOG}
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
