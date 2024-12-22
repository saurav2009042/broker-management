import React from 'react';
import Chip from '../../common/chip/Chip';
import Detail from '../../common/detail/Detail';
import './QuotationOverview.css';

const QuotationOverview: React.FC = () => {
    return (
        <div className='quotation-overview'>
            <h2 className='quotation-overview-title'>Quotation Overview</h2>

            <div className='quotation-overview-content'>
                <Detail label='Product' value='Whole turnover' />
                <Detail label='Origin' value='Submission' />
                <Detail label='Commercial Owner' value='Richard ALDANA' />
                <Detail label='Creation' value='05/10/2023' />
                <Detail label='Update' value='05/10/2023' />
                <div className='quotation-overview-status'>
                    <span className='detail-label'>Status</span>
                    <Chip label='IN PROGRESS' /> 
                </div>
            </div>
        </div>
    );
};

export default QuotationOverview;
