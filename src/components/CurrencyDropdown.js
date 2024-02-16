import React from 'react';
import './CurrencyDropdown.css';

const CurrencyDropdown = ({ selectedCurrency, onCurrencyChange }) => {
    return (
        <select className="custom-dropdown" value={selectedCurrency} onChange={onCurrencyChange}>
            <option value="dollar">$ Dollar</option>
            <option value="pound">£ Pound</option>
            <option value="euro">€ Euro</option>
            <option value="rupee">₹ Rupee</option>
        </select>
    );
};

export default CurrencyDropdown;
