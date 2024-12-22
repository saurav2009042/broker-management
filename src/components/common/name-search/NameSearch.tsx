import React, { useEffect, useRef, useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { ENameSearch } from '../../../enums';
import { INameSearchProps } from '../../../interfaces';
import './NameSearch.css';

const NameSearch: React.FC<INameSearchProps> = ({
    placeholder,
    brokerData,
    onSelect,
    onCreateNew,
    onClear,
    setSearchTermExternally,
    onNameChange,
}) => {
    const [searchTerm, setSearchTerm] = useState(setSearchTermExternally || '');
    const [filteredData, setFilteredData] = useState<{ name: string; address: string; country: string }[]>([]);
    const [showAutocomplete, setShowAutocomplete] = useState(false);
    const autocompleteRef = useRef<HTMLDivElement>(null);

    // If there is a Name value present, the searchTerm is set to that.
    useEffect(() => {
        if (setSearchTermExternally) {
            setSearchTerm(setSearchTermExternally);
        }
    }, [setSearchTermExternally]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (onNameChange) {
            onNameChange(value);
        }

        if (value) {
            const filtered = Object.keys(brokerData).filter((item) =>
                item.toLowerCase().includes(value.toLowerCase())
            ).map((key) => ({
                name: key,
                address: brokerData[key].address,
                country: brokerData[key].country,
            }));

            setFilteredData(filtered);
            setShowAutocomplete(true);
        } else {
            setFilteredData([]);
            setShowAutocomplete(false);
            onClear();
        }

        // Clear fields if the input value doesn't match any broker name
        if (!brokerData[value]) {
            onClear();
        }
    };

    const handleSelect = (value: string) => {
        setSearchTerm(value);
        setShowAutocomplete(false);
        onSelect(value);
    };

    const handleClearInput = () => {
        setSearchTerm('');
        setFilteredData([]);
        setShowAutocomplete(false);
        onClear();
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (autocompleteRef.current && !autocompleteRef.current.contains(event.target as Node)) {
                setShowAutocomplete(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='name-search-wrapper' ref={autocompleteRef}>
            <label htmlFor='name-search-bar' className='name-search-label'>
                {ENameSearch.NAME}
            </label>
            <input
                id='name-search-bar'
                type='text'
                className='search-bar'
                placeholder={placeholder}
                value={searchTerm}
                onChange={handleInputChange}
            />
            {searchTerm ? (
                <FaTimes className='search-icon' onClick={handleClearInput} />
            ) : (
                <FaSearch className='search-icon' />
            )}

            {showAutocomplete && (
                <div className='autocomplete'>
                    {filteredData.map((item, index) => (
                        <div key={index} className='autocomplete-item' onClick={() => handleSelect(item.name)}>
                            {item.name} - {item.address}, {item.country}
                        </div>
                    ))}
                    {onCreateNew && (
                        <>
                            <hr className='autocomplete-divider' />
                            <div className='autocomplete-item' onClick={onCreateNew}>
                                or <span className='create-new'>{ENameSearch.CREATE_NEW_ENTITY}</span>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default NameSearch;
