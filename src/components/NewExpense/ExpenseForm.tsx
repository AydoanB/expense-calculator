import './ExpenseForm.css';
import SingleInput from './SingleInput';
import { useState } from 'react';
import { ExpenseProps } from '../../compiler/types';


function ExpenseForm(props: { onSaveExpenseData: (expenseData: any) => void }) {

    const [enteredTitle, setEnteredTtile] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    function submitForm(event: any): void {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount as unknown as number,
            date: new Date(enteredDate),
        };

        setEnteredTtile('');
        setEnteredAmount('');
        setEnteredDate('');

        props.onSaveExpenseData(expenseData as ExpenseProps);
    }

    return (
        <form onSubmit={submitForm}>
            <div className='new-expense__controls'>
                <SingleInput defaultValue={enteredTitle} inputData={(e: any) => setEnteredTtile(e.target.value)} type='text' label='Title' />
                <SingleInput defaultValue={enteredAmount} inputData={(e: any) => setEnteredAmount(e.target.value)} type='number' label='Amount' />
                <SingleInput defaultValue={enteredDate} inputData={(e: any) => setEnteredDate(e.target.value)} label='Date' type='date' />
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add an expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;