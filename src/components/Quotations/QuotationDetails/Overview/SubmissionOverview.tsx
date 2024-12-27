import React from 'react';
import { EOverview } from '../../../../enums';
import { ChipField, Field } from '../../../Common';
import './Overview.css';

const SubmissionOverview: React.FC = () => {
    return (
        <div className='overview submission-overview'>
            <h2 className='overview__title'>{EOverview.TITLE_SUBMISSION_OVERVIEW}</h2>

            <div className='overview__content'>
                <Field label='Business Developer' value='Richard ALDANA' />
                <Field label='Creation' value='05/10/2023' />
                <ChipField label='Status' value='DONE' />
            </div>
        </div>
    );
};

export default SubmissionOverview;
