import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ELegalEntityModal } from '../../../../../enums';
import { ICreateOrEditEntityModalProps, IManagingBrokerData } from '../../../../../interfaces';
import { fetchContactValues } from '../../../../../services';
import './CreateOrEditLegalEntityModal.css';

const CreateOrEditEntityModal: React.FC<ICreateOrEditEntityModalProps> = ({
    isOpen,
    onClose,
    managingBrokerData,
    addManagingBroker,
    initialLegalName,
}) => {
    const [legalName, setLegalName] = useState(initialLegalName);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [warning, setWarning] = useState('');

    const modalRef = useRef<HTMLDivElement>(null);

    const handleCreate = async () => {
        const fullAddress = `${address || ''}${address && city ? ', ' : ''}${city || ''}`;
        const contactValues = await fetchContactValues(legalName);

        const newBroker: IManagingBrokerData = {
            name: legalName,
            address: fullAddress,
            country: country,
            contact: contactValues[0],
            availableContacts: contactValues,
            commission: 0,
        };
        addManagingBroker(newBroker);
        onClose();
    };

    const handleEscapeKey = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        },
        [onClose],
    );

    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        },
        [onClose],
    );

    useEffect(() => {
        document.addEventListener('keydown', handleEscapeKey);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleEscapeKey, handleClickOutside]);

    // Handles Warnings
    useEffect(() => {
        const fullAddress = `${address || ''}${address && city ? ', ' : ''}${city || ''}`;
        if (legalName === '') {
            setWarning(ELegalEntityModal.REQUIRED);
        } else if (Object.values(managingBrokerData).some((broker) => 
            broker.name === legalName &&
            broker.address === fullAddress &&
            broker.country === country
        )) {
            setWarning(ELegalEntityModal.EXISTS);
        } else {
            setWarning('');
        }
    }, [legalName, address, city, country, managingBrokerData]);

    useEffect(() => {
        if (isOpen) {
            setLegalName(initialLegalName);
            setAddress('');
            setCity('');
            setCountry('');
            setWarning('');
        }
    }, [isOpen, initialLegalName]);

    if (!isOpen) return null;

    return (
        <div className='modal__overlay'>
            <div className='modal__container' ref={modalRef}>
                <div className='modal__header'>{ELegalEntityModal.HEADER}</div>

                <div className='modal__body'>
                    <div className='modal__field'>
                        <label className='modal__label'>{ELegalEntityModal.LEGAL_NAME}</label>
                        <input type='text' 
                               value={legalName}
                               onChange={(e) => setLegalName(e.target.value)}
                               className='modal__input' />
                    </div>
                    <div className='modal__field'>
                        <label className='modal__label'>{ELegalEntityModal.ADDRESS}</label>
                        <input type='text' 
                               value={address} 
                               onChange={(e) => setAddress(e.target.value)} 
                               className='modal__input' />
                    </div>
                    <div className='modal__field'>
                        <label className='modal__label'>{ELegalEntityModal.CITY}</label>
                        <input type='text' 
                               value={city} 
                               onChange={(e) => setCity(e.target.value)} 
                               className='modal__input' />
                    </div>
                    <div className='modal__field'>
                        <label className='modal__label'>{ELegalEntityModal.COUNTRY}</label>
                        <input type='text' 
                               value={country} 
                               onChange={(e) => setCountry(e.target.value)} 
                               className='modal__input' />
                    </div>
                </div>
                {warning && <div className='modal__warning'>{warning}</div>}

                <div className='modal__footer'>
                    <button onClick={onClose}
                            className='modal__button modal__button--cancel'>
                        {ELegalEntityModal.CANCEL}
                    </button>
                    <button onClick={handleCreate} 
                            className='modal__button modal__button--create' 
                            disabled={!!warning}>
                        {ELegalEntityModal.CREATE}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateOrEditEntityModal;
