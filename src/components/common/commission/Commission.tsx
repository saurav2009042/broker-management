import React from 'react';
import { EManagingBroker } from '../../../enums';
import { ICommissionProps } from '../../../interfaces';
import './Commission.css';

const Commission: React.FC<ICommissionProps> = ({ value = 0 }) => {
    return (
        <div className='commission'>
            <label htmlFor='commission' className='commission__label'>
                {EManagingBroker.COMMISSION}
            </label>
            <div className='commission__input-wrapper'>
                <input
                    type='number'
                    className='commission__input'
                    id='commission'
                    placeholder='Enter commission'
                    value={value.toString()}
                    aria-labelledby='commission-label'
                />
                <span className='commission__percentage'>%</span>
            </div>
        </div>
    );
};

export default Commission;
