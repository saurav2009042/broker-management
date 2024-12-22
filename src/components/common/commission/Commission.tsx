import React from 'react';
import { EManagingBroker } from '../../../enums';
import { ICommissionProps } from '../../../interfaces';
import './Commission.css';

const Commission: React.FC<ICommissionProps> = ({ value }) => {
    return (
        <div className='commission-wrapper'>
            <label htmlFor='commission' className='commission-label'>
                {EManagingBroker.COMMISSION}
            </label>
            <div>
                <input type='number'
                       className='commission-input'
                       id='commission'
                       placeholder='Enter commission'
                       value={value?.toString()} />
                <span className='percentage'>%</span>
            </div>
        </div>
    );
};

export default Commission;
