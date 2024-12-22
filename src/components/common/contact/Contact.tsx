import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { EManagingBroker } from '../../../enums';
import { IContactProps } from '../../../interfaces';
import './Contact.css';

const Contact: React.FC<IContactProps> = ({ value, availableContacts, onSelectContact }) => {
    return (
        <div className='contact-wrapper' style={{ marginTop: '25px' }}>
            <label htmlFor='contact' className='contact-label'>
                {EManagingBroker.CONTACT}
            </label>
            <div className='select-wrapper'>
                <select id='contact'
                        className='select-bar'
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
                            {contact.name} (<span className='contact-email'>{contact.email}</span>)
                        </option>
                    ))}
                </select>
                <FaCaretDown className='contact-caret-icon' />
            </div>
        </div>
    );
};

export default Contact;
