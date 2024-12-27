import React from 'react';
import { IFieldProps } from '../../../interfaces';
import './Field.css';

const Field: React.FC<IFieldProps> = ({ label, value }) => {
    return (
        <div className='field'>
            <span className='field__label'>{label}</span>
            <span className='field__value'>{value}</span>
        </div>
    );
};

export default Field;
