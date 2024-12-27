import React from 'react';
import { EOverview } from '../../../../enums';
import { ChipField, Field } from '../../../Common';
import './Overview.css';

const QuotationOverview: React.FC = () => {
    return (
        <div className='overview quotation-overview'>
            <h2 className='overview__title'>{EOverview.TITLE_QUOTATION_OVERVIEW}</h2>

            <div className='overview__content'>
                <Field label='Product' value='Whole turnover' />
                <Field label='Origin' value='Submission' />
                <Field label='Commercial Owner' value='Richard ALDANA' />
                <Field label='Creation' value='05/10/2023' />
                <Field label='Update' value='05/10/2023' />
                <ChipField label='Status' value='IN PROGRESS'/>
            </div>
        </div>
    );
};

export default QuotationOverview;
