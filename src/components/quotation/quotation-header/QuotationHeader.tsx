import React from 'react';
import { FaCaretDown, FaEllipsisH, FaHome } from 'react-icons/fa';
import { EQuotationHeader } from '../../../enums';
import { IQuotationHeader } from '../../../interfaces';
import './QuotationHeader.css';

const QuotationHeader: React.FC<IQuotationHeader> = ({ breadcrumbs, title, buttonText, onButtonClick }) => {
    return (
        <header className='quotation-header'>
            <div className='breadcrumbs-container'>
                <nav className='breadcrumbs'>
                    <FaHome className='home-icon' />
                    {breadcrumbs.paths.map((path, index) => (
                        <React.Fragment key={index}>
                            <span className='breadcrumb-separator'>/</span>
                            <span className='breadcrumb'>{path}</span>
                        </React.Fragment>
                    ))}
                </nav>

                <div className='button-container'>
                    <button className='button' onClick={onButtonClick}>
                        {EQuotationHeader.BUTTON_TEXT}
                        <FaCaretDown className='caret-icon' />
                    </button>
                    <button className='context-menu-button'>
                        <FaEllipsisH />
                    </button>
                </div>
            </div>

            <h1 className='title'>{title}</h1>
        </header>
    );
};

export default QuotationHeader;
