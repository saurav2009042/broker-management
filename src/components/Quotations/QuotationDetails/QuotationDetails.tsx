import React from 'react';
import { QuotationOverview, SubmissionOverview } from './Overview';
import './QuotationDetails.css';
import { QuotationHeader } from './QuotationHeader';
import { QuotationTabs } from './QuotationTabs';

const QuotationDetails: React.FC = () => {
    const breadcrumbs = { paths: ['Quotations', 'Current Quotation'] };

    return (
        <div className='quotation-details'>
            <QuotationHeader
                breadcrumbs={breadcrumbs}
                title='Quotation Title'
                onButtonClick={() => alert('Button clicked!')}
            />
            <div className='quotation-details__content'>
                <div className='quotation-details__tabs'>
                    <QuotationTabs />
                </div>
                <div className='quotation-details__overview'>
                    <QuotationOverview />
                    <SubmissionOverview />
                </div>
                
            </div>
        </div>
    );
};

export default QuotationDetails;
