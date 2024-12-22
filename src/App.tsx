import React, { useState } from 'react';
import './App.css';
import AppBar from './components/app-bar/AppBar';
import AuditLog from './components/audit-log/AuditLog';
import Dashboard from './components/dashboard/Dashboard';
import Policies from './components/policies/Policies';
import Quotation from './components/quotation/Quotation';
import Sidebar from './components/sidebar/Sidebar';
import Submissions from './components/submissions/Submissions';
import { ESidebarOptions } from './enums';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<string>(ESidebarOptions.QUOTATIONS);

    const handleItemClick = (page: string) => {
        setCurrentPage(page);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'dashboard':
                return <Dashboard />;
            case 'submissions':
                return <Submissions />;
            case 'quotations':
                return <Quotation />;
            case 'policies':
                return <Policies />;
            case 'audit':
                return <AuditLog />;
            default:
                return <Quotation />;
        }
    };

    return (
        <div className='app'>
            <AppBar />
            <div className='main-content'>
                <Sidebar onItemClick={handleItemClick} />
                <div className='content'>{renderPage()}</div>
            </div>
        </div>
    );
};

export default App;
