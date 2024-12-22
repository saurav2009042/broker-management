import React from 'react';
import Chip from '../../common/chip/Chip';
import Detail from '../../common/detail/Detail';
import './SubmissionOverview.css';

const SubmissionOverview: React.FC = () => {
    return (
        <div className='submission-overview'>
            <h2 className='submission-overview-title'>Submission Overview</h2>

            <div className='submission-overview-content'>
                <Detail label='Business Developer' value='Richard ALDANA' />
                <Detail label='Creation' value='05/10/2023' />
                <div className='submission-overview-status'>
                    <span className='detail-label'>Status</span>
                    <Chip label='DONE' /> 
                </div>
            </div>
        </div>
    );
};

export default SubmissionOverview;
