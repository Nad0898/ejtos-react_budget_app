import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    //const { budget } = useContext(AppContext);
    const { budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    //const handleBudgetChange = (event) => {
    //   setNewBudget(event.target.value);
    //}
    const [error, setError] = useState('');

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        const value = event.target.value;
        if (value < 0) {
            alert('Budget cannot be negative.');
        } 
        else if (value < totalExpenses) {
            alert('You cannot reduce the budget value lower than the value spended.');
        }       
        else {
            setError('');
            setNewBudget(value);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange} ></input>

{error && <div className="text-danger">{error}</div>}
</div>
    );
};
export default Budget;