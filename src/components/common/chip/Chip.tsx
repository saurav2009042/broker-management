import React from 'react';
import './Chip.css';

interface ChipProps {
    label: string;
}

const Chip: React.FC<ChipProps> = ({ label }) => {
    return <span className='chip'>{label}</span>;
};

export default Chip;
