import React, { useEffect, useState } from 'react';
import { EManagingBroker } from '../../../enums';
import { IManagingBrokerData } from '../../../interfaces';
import { fetchManagingBrokerData } from '../../../services/managingBroker.service';
import Commission from '../../common/commission/Commission';
import Contact from '../../common/contact/Contact';
import Detail from '../../common/detail/Detail';
import NameSearch from '../../common/name-search/NameSearch';
import CreateOrEditEntityModal from '../../entity/CreateOrEditLegalEntityModal';
import './ManagingBroker.css';

const ManagingBroker: React.FC = () => {
    const [managingBrokerData, setManagingBrokerData] = useState<{ [key: string]: IManagingBrokerData }>({});
    const [selectedManagingBroker, setSelectedManagingBroker] = useState<IManagingBrokerData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentName, setCurrentName] = useState('');

    useEffect(() => {
        fetchManagingBrokerData().then((data) => setManagingBrokerData(data));
    }, []);

    const handleNameSelection = (value: string) => {
        const selectedBroker = managingBrokerData[value] || null;
        setSelectedManagingBroker(selectedBroker);
    };

    const handleClearNameSelection = () => {
        setSelectedManagingBroker(null);
    };

    const handleCreateNewLegalEntityClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleContactSelection = (newContact: { name: string; email: string }) => {
        if (selectedManagingBroker) {
            setSelectedManagingBroker({ ...selectedManagingBroker, contact: newContact });
        }
    };

    const handleNameChange = (value: string) => {
        setCurrentName(value);

        if (!managingBrokerData[value]) {
            setSelectedManagingBroker(null);

        } else {
            setSelectedManagingBroker(managingBrokerData[value]);
        }
    };

    const addManagingBroker = (newBroker: IManagingBrokerData) => {
        setManagingBrokerData((prevData) => ({ ...prevData, [newBroker.name]: newBroker }));
        setSelectedManagingBroker(newBroker);
    };

    return (
        <div className='managing-broker-container'>
            <div className='managing-broker-card-header'>
                <h1 className='managing-broker-header'>{EManagingBroker.HEADER}</h1>
                <h2 className='managing-broker-sub-header'>{EManagingBroker.SUB_HEADER}</h2>
            </div>

            <div className='managing-broker-card-content'>
                <NameSearch
                    placeholder='Search managing broker...'
                    brokerData={managingBrokerData}
                    onSelect={handleNameSelection}
                    onClear={handleClearNameSelection}
                    onCreateNew={handleCreateNewLegalEntityClick}
                    setSearchTermExternally={selectedManagingBroker ? selectedManagingBroker.name : ''}
                    onNameChange={handleNameChange}
                />

                {selectedManagingBroker && (
                    <div className='managing-broker-details-container'>
                        <Detail
                            label={EManagingBroker.ADDRESS}
                            value={selectedManagingBroker.address}
                        />
                        <Detail
                            label={EManagingBroker.COUNTRY}
                            value={selectedManagingBroker.country}
                        />
                        <Contact
                            value={selectedManagingBroker.contact}
                            availableContacts={selectedManagingBroker.availableContacts}
                            onSelectContact={handleContactSelection}
                        />
                        <Commission value={selectedManagingBroker.commission} />
                    </div>
                )}
            </div>
            <CreateOrEditEntityModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                managingBrokerData={managingBrokerData}
                addManagingBroker={addManagingBroker}
                initialLegalName={currentName}
            />
        </div>
    );
};

export default ManagingBroker;
