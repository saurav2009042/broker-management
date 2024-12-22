import React, { useEffect, useState } from 'react';
import { EIntroducingBroker } from '../../../enums';
import { IIntroducingBrokerData } from '../../../interfaces';
import { fetchIntroducingBrokerData } from '../../../services/introducingBroker.service';
import NameSearch from '../../common/name-search/NameSearch';
import './IntroducingBroker.css';

const IntroducingBroker: React.FC = () => {
    const [introducingBrokerData, setIntroducingBrokerData] = useState<{ [key: string]: IIntroducingBrokerData }>({});
    const [selectedIntroducingBroker, setSelectedIntroducingBroker] = useState<IIntroducingBrokerData | null>(null);

    useEffect(() => {
        fetchIntroducingBrokerData().then((data) => setIntroducingBrokerData(data));
    }, []);

    const handleSelect = (value: string) => {
        setSelectedIntroducingBroker(introducingBrokerData[value] || null);
    };

    const handleClearSelection = () => {
        setSelectedIntroducingBroker(null);
    };

    return (
        <div className='introducing-broker-container'>
            <div className='introducing-broker-card-header'>
                <h1 className='introducing-broker-header'>{EIntroducingBroker.HEADER}</h1>
                <h2 className='introducing-broker-sub-header'>{EIntroducingBroker.SUB_HEADER}</h2>
            </div>
            <div className='introducing-broker-card-content'>
                <NameSearch placeholder='Search introducing broker...'
                    		brokerData={introducingBrokerData}
                    		onSelect={handleSelect}
                    		onClear={handleClearSelection} />

                {selectedIntroducingBroker && (
                    <div className='introducing-broker-details-container'>
                        <div className='introducing-broker-detail'>
                            <span className='introducing-broker-label'>{EIntroducingBroker.ADDRESS}</span>
                            <span className='introducing-broker-value'>{selectedIntroducingBroker.address}</span>
                        </div>
                        <div className='introducing-broker-detail'>
                            <span className='introducing-broker-label'>{EIntroducingBroker.COUNTRY}</span>
                            <span className='introducing-broker-value'>{selectedIntroducingBroker.country}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default IntroducingBroker;
