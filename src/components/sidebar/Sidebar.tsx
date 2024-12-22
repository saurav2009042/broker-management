import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { ESidebarOptions } from '../../enums';
import './Sidebar.css';

interface SidebarProps {
    onItemClick: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onItemClick }) => {
    const [selectedItem, setSelectedItem] = useState<string>(ESidebarOptions.QUOTATIONS);

    const handleItemClick = (page: string) => {
        setSelectedItem(page);
        onItemClick(page);
    };

    return (
        <aside className='sidebar'>
            <ul>
                <li className={selectedItem === 'dashboard' ? 'selected' : ''}
                    onClick={() => handleItemClick('dashboard')}>
                    <FaStar className='menu-icon' />
                    {ESidebarOptions.DASHBOARD}
                </li>
                <li className={selectedItem === 'submissions' ? 'selected' : ''}
                    onClick={() => handleItemClick('submissions')}>
                    <FaStar className='menu-icon' />
                    {ESidebarOptions.SUBMISSIONS}
                </li>
                <li className={selectedItem === 'quotations' ? 'selected' : ''}
                    onClick={() => handleItemClick('quotations')}>
                    <FaStar className='menu-icon' />
                    {ESidebarOptions.QUOTATIONS}
                </li>
                <li className={selectedItem === 'policies' ? 'selected' : ''}
                    onClick={() => handleItemClick('policies')}>
                    <FaStar className='menu-icon' />
                    {ESidebarOptions.POLICIES}
                </li>
                <li className={selectedItem === 'audit' ? 'selected' : ''}
                    onClick={() => handleItemClick('audit')}>
                    <FaStar className='menu-icon' />
                    {ESidebarOptions.AUDIT_LOG}
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
