import React from 'react';
import { IDetailProps } from '../../../interfaces';
import './Detail.css';

const Detail: React.FC<IDetailProps> = ({ label, value }) => {
    return (
        <div className='detail'>
            <span className='detail-label'>{label}</span>
            <span className='detail-value'>{value}</span>
        </div>
    );
};

export default Detail;
