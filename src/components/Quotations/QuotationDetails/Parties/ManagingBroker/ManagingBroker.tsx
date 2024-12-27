import React, { useEffect, useState } from 'react';
import { CreateOrEditLegalEntityModal } from '.';
import { EManagingBroker } from '../../../../../enums';
import { IManagingBrokerData } from '../../../../../interfaces';
import { fetchManagingBrokerData } from '../../../../../services';
import { Commission, Contact, Field, NameSearch } from '../../../../Common';
import '../Parties.css';

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
        <div className='parties-card'>
            <div className='parties-card__card-header'>
                <h1 className='parties-card__header'>{EManagingBroker.HEADER}</h1>
                <h2 className='parties-card__sub-header'>{EManagingBroker.SUB_HEADER}</h2>
            </div>

            <div className='parties-card__card-content'>
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
                    <div className='parties-card__details-container'>
                        <Field
                            label={EManagingBroker.ADDRESS}
                            value={selectedManagingBroker.address}
                        />
                        <Field
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
            <CreateOrEditLegalEntityModal
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
