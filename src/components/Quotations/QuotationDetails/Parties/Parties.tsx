import React from 'react';
import { IntroducingBroker } from './IntroducingBroker';
import { JointInsured } from './JointInsured';
import { ManagingBroker } from './ManagingBroker';
import './Parties.css';

const Parties: React.FC = () => {
    return (
        <div className='parties'>
            <div className='parties__card'>
                <JointInsured />
            </div>
            <div className='parties__card'>
                <ManagingBroker />
            </div>
            <div className='parties__card'>
                <IntroducingBroker />
            </div>
        </div>
    );
};

export default Parties;
