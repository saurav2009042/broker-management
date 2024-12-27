import React, { useEffect, useState } from 'react';
import { EJointInsured } from '../../../../../enums';
import { IJointInsuredData } from '../../../../../interfaces';
import { fetchJointInsuredData } from '../../../../../services';
import { NameSearch } from '../../../../Common';
import '../Parties.css';

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
        <div className='parties-card'>
            <div className='parties-card__card-header'>
                <h1 className='parties-card__header'>{EJointInsured.HEADER}</h1>
                <h2 className='parties-card__sub-header'>{EJointInsured.SUB_HEADER}</h2>
            </div>
            <div className='parties-card__card-content'>
                <NameSearch placeholder='Search joint insured...'
                    		brokerData={jointInsuredData}
                    		onSelect={handleSelect}
                    		onClear={handleClearSelection} />

                {selectedJointInsured && (
                    <div className='parties-card__details-container'>
                        <div className='parties-card__detail joint-insured__detail'>
                            <span className='parties-card__label'>{EJointInsured.ADDRESS}</span>
                            <span className='parties-card__value'>{selectedJointInsured.address}</span>
                        </div>
                        <div className='parties-card__detail joint-insured__detail'>
                            <span className='parties-card__label'>{EJointInsured.COUNTRY}</span>
                            <span className='parties-card__value'>{selectedJointInsured.country}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JointInsured;
