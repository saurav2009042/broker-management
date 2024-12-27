import React, { useState } from 'react';
import './App.css';
import { AppBar, AuditLog, Dashboard, Policies, QuotationDetails, Sidebar, Submissions } from './components';
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
                return <QuotationDetails />;
            case 'policies':
                return <Policies />;
            case 'audit':
                return <AuditLog />;
            default:
                return <QuotationDetails />;
        }
    };

    return (
        <div className='app'>
            <AppBar />
            <div className='app__main-content'>
                <Sidebar onItemClick={handleItemClick} />
                <div className='app__content'>{renderPage()}</div>
            </div>
        </div>
    );
};

export default App;
