import React from 'react';
import { FaCaretDown, FaEllipsisH, FaHome } from 'react-icons/fa';
import { EQuotationHeader } from '../../../../enums';
import { IQuotationHeaderProps } from '../../../../interfaces';
import './QuotationHeader.css';

const QuotationHeader: React.FC<IQuotationHeaderProps> = ({ breadcrumbs, title, onButtonClick }) => {
    return (
        <header className='quotation-header'>
            <div className='quotation-header__breadcrumbs-container'>
                <nav className='quotation-header__breadcrumbs'>
                    <FaHome className='quotation-header__home-icon' />
                    {breadcrumbs.paths.map((path, index) => (
                        <React.Fragment key={index}>
                            <span className='quotation-header__breadcrumb-separator'>/</span>
                            <span className='quotation-header__breadcrumb'>{path}</span>
                        </React.Fragment>
                    ))}
                </nav>

                <div className='quotation-header__button-container'>
                    <button className='quotation-header__button' onClick={onButtonClick}>
                        {EQuotationHeader.BUTTON_TEXT}
                        <FaCaretDown className='quotation-header__caret-icon' />
                    </button>
                    <button className='quotation-header__context-menu-button'>
                        <FaEllipsisH />
                    </button>
                </div>
            </div>

            <h1 className='quotation-header__title'>{title}</h1>
        </header>
    );
};

export default QuotationHeader;
