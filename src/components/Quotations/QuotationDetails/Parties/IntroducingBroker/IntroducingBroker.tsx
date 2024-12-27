import React, { useEffect, useState } from 'react';
import { EIntroducingBroker } from '../../../../../enums';
import { IIntroducingBrokerData } from '../../../../../interfaces';
import { fetchIntroducingBrokerData } from '../../../../../services';
import { NameSearch } from '../../../../Common';
import '../Parties.css';

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
        <div className='parties-card'>
            <div className='parties-card__card-header'>
                <h1 className='parties-card__header'>{EIntroducingBroker.HEADER}</h1>
                <h2 className='parties-card__sub-header'>{EIntroducingBroker.SUB_HEADER}</h2>
            </div>
            <div className='parties-card__card-content'>
                <NameSearch placeholder='Search introducing broker...'
                    		brokerData={introducingBrokerData}
                    		onSelect={handleSelect}
                    		onClear={handleClearSelection} />

                {selectedIntroducingBroker && (
                    <div className='parties-card__details-container'>
                        <div className='parties-card__detail introducing-broker__detail'>
                            <span className='parties-card__label'>{EIntroducingBroker.ADDRESS}</span>
                            <span className='parties-card__value'>{selectedIntroducingBroker.address}</span>
                        </div>
                        <div className='parties-card__detail introducing-broker__detail'>
                            <span className='parties-card__label'>{EIntroducingBroker.COUNTRY}</span>
                            <span className='parties-card__value'>{selectedIntroducingBroker.country}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default IntroducingBroker;
