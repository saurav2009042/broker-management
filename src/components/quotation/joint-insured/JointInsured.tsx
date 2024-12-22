import React, { useEffect, useState } from 'react';
import { EJointInsured } from '../../../enums';
import { IJointInsuredData } from '../../../interfaces/joint-insured.interface';
import { fetchJointInsuredData } from '../../../services/jointInsured.service';
import NameSearch from '../../common/name-search/NameSearch';
import './JointInsured.css';

const JointInsured: React.FC = () => {
    const [jointInsuredData, setjointInsuredData] = useState<{ [key: string]: IJointInsuredData }>({});
    const [selectedJointInsured, setSelectedJointInsured] = useState<IJointInsuredData | null>(null);

    useEffect(() => {
        fetchJointInsuredData().then((data) => setjointInsuredData(data));
    }, []);

    const handleSelect = (value: string) => {
        setSelectedJointInsured(jointInsuredData[value] || null);
    };

    const handleClearSelection = () => {
        setSelectedJointInsured(null);
    };

    return (
        <div className='joint-insured-container'>
            <div className='joint-insured-card-header'>
                <h1 className='joint-insured-header'>{EJointInsured.HEADER}</h1>
                <h2 className='joint-insured-sub-header'>{EJointInsured.SUB_HEADER}</h2>
            </div>
            <div className='joint-insured-card-content'>
                <NameSearch placeholder='Search joint insured...'
                    		brokerData={jointInsuredData}
                    		onSelect={handleSelect}
                    		onClear={handleClearSelection} />

                {selectedJointInsured && (
                    <div className='joint-insured-details-container'>
                        <div className='joint-insured-detail'>
                            <span className='joint-insured-label'>{EJointInsured.ADDRESS}</span>
                            <span className='joint-insured-value'>{selectedJointInsured.address}</span>
                        </div>
                        <div className='joint-insured-detail'>
                            <span className='joint-insured-label'>{EJointInsured.COUNTRY}</span>
                            <span className='joint-insured-value'>{selectedJointInsured.country}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JointInsured;
