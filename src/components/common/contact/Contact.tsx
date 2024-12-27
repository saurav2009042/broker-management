import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { EManagingBroker } from '../../../enums';
import { IContactProps } from '../../../interfaces';
import './Contact.css';

const Contact: React.FC<IContactProps> = ({ value, availableContacts, onSelectContact }) => {
    return (
        <div className='contact'>
            <label htmlFor='contact' className='contact__label'>
                {EManagingBroker.CONTACT}
            </label>
            <div className='contact__select-wrapper'>
                <select 
                    id='contact'
                    className='contact__select-bar'
                    aria-label='Select Contact'
                    value={value ? `${value.name} <${value.email}>` : ''}
                    onChange={(e) => {
                        const selectedOption = availableContacts?.find(
                            contact => `${contact.name} <${contact.email}>` === e.target.value
                        );

                        if (selectedOption) {
                            onSelectContact(selectedOption);
                        }
                    }}>
                    {availableContacts?.map((contact, index) => (
                        <option key={index} value={`${contact.name} <${contact.email}>`}>
                            {contact.name} (<span className='contact__email'>{contact.email}</span>)
                        </option>
                    ))}
                </select>
                <FaCaretDown className='contact__caret-icon' />
            </div>
        </div>
    );
};

export default Contact;
