import React, { useState } from 'react';
import { EQuotationTabs } from '../../../../enums';
import { Parties } from '../Parties';
import './QuotationTabs.css';

const QuotationTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Parties');

    const renderTabContent = () => {
        switch (activeTab) {
            case EQuotationTabs.PARTIES:
                return (
                    <Parties />
                );
            case EQuotationTabs.COVERAGE:
                return <p>Coverage Content</p>;
            case EQuotationTabs.PREMIUM:
                return <p>Premium Content</p>;
            case EQuotationTabs.FEES:
                return <p>Fees Content</p>;
            case EQuotationTabs.DISCRETIONARY_CREDIT_LIMIT:
                return <p>DCL Content</p>;
            case EQuotationTabs.CLAIMS:
                return <p>Claims Content</p>;
            case EQuotationTabs.POLITICAL_RISK:
                return <p>PR Content</p>;
            default:
                return null;
        }
    };

    const quotationTabs = [
        EQuotationTabs.PARTIES,
        EQuotationTabs.COVERAGE,
        EQuotationTabs.PREMIUM,
        EQuotationTabs.FEES,
        EQuotationTabs.DISCRETIONARY_CREDIT_LIMIT,
        EQuotationTabs.CLAIMS,
        EQuotationTabs.POLITICAL_RISK,
    ];

    return (
        <div className='quotation-tabs'>
            <nav className='quotation-tabs__tab-nav'>
                {quotationTabs.map((tab) => (
                    <button key={tab}
                            className={`quotation-tabs__button ${activeTab === tab ? 'quotation-tabs__button--active' : ''}`} 
                            onClick={() => setActiveTab(tab)}>
                        {tab}
                    </button>
                ))}
            </nav>
            <div className='quotation-tabs__content'>{renderTabContent()}</div>
        </div>
    );
};

export default QuotationTabs;
