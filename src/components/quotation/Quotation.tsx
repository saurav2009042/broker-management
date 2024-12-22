import React from 'react';
import QuotationDetail from './quotation-detail/QuotationDetail';
import QuotationHeader from './quotation-header/QuotationHeader';
import QuotationOverview from './quotation-overview/QuotationOverview';
import './Quotation.css';
import SubmissionOverview from './submission-overview/SubmissionOverview';

const Quotation: React.FC = () => {
    const breadcrumbs = { paths: ['Quotations', 'Current Quotation'] };

    return (
        <div className='quotation-page'>
            <QuotationHeader
                breadcrumbs={breadcrumbs}
                title='Quotation Title'
                buttonText='Action Button'
                onButtonClick={() => alert('Button clicked!')}
            />
            <div className='quotation-content'>
                <div className='quotation-detail-wrapper'>
                    <QuotationDetail />
                </div>
                <div className='overview-submission-wrapper'>
                    <QuotationOverview />
                    <SubmissionOverview />
                </div>
            </div>
        </div>
    );
};

export default Quotation;
