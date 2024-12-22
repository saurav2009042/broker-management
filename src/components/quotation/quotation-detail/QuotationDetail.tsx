import React, { useState } from 'react';
import { EQuotationDetailTabs } from '../../../enums';
import IntroducingBroker from '../introducing-broker/IntroducingBroker';
import JointInsured from '../joint-insured/JointInsured';
import ManagingBroker from '../managing-broker/ManagingBroker';
import './QuotationDetail.css';

const QuotationDetail: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Parties');

    const renderTabContent = () => {
        switch (activeTab) {
            case EQuotationDetailTabs.PARTIES:
                return (
                    <div className='tab-cards'>
                        <div className='card'><JointInsured /></div>
                        <div className='card'><ManagingBroker /></div>
                        <div className='card'><IntroducingBroker /></div>
                    </div>
                );
            case EQuotationDetailTabs.COVERAGE:
                return <p>Coverage Content</p>;
            case EQuotationDetailTabs.PREMIUM:
                return <p>Premium Content</p>;
            case EQuotationDetailTabs.FEES:
                return <p>Fees Content</p>;
            case EQuotationDetailTabs.DISCRETIONARY_CREDIT_LIMIT:
                return <p>DCL Content</p>;
            case EQuotationDetailTabs.CLAIMS:
                return <p>Claims Content</p>;
            case EQuotationDetailTabs.POLITICAL_RISK:
                return <p>PR Content</p>;
            default:
                return null;
        }
    };

    const quotationDetailTabs = [
        EQuotationDetailTabs.PARTIES,
        EQuotationDetailTabs.COVERAGE,
        EQuotationDetailTabs.PREMIUM,
        EQuotationDetailTabs.FEES,
        EQuotationDetailTabs.DISCRETIONARY_CREDIT_LIMIT,
        EQuotationDetailTabs.CLAIMS,
        EQuotationDetailTabs.POLITICAL_RISK,
    ];

    return (
        <div className='quotation-detail'>
            <nav className='tab-nav'>
                {quotationDetailTabs.map((tab) => (
                    <button key={tab}
                            className={`tab-button ${activeTab === tab ? 'active' : ''}`} 
                            onClick={() => setActiveTab(tab)}>
                        {tab}
                    </button>
                ))}
            </nav>
            <div className='tab-content'>{renderTabContent()}</div>
        </div>
    );
};

export default QuotationDetail;
