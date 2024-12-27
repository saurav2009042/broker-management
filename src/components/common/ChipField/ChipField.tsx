import React from 'react';
import { IFieldProps } from '../../../interfaces';
import './ChipField.css';

const ChipField: React.FC<IFieldProps> = ({ label, value }) => {
    return (
        <div className='chip-field'>
            <span className='chip-field__label'>{label}</span>
            <span className='chip-field__value'>{value}</span>
        </div>
    );
};

export default ChipField;
