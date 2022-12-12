import './ExpenseForm.css';
import SingleInput from './SingleInput';
import { useState } from 'react'

function ExpenseForm() {

    const [input, setInput] = useState('');


    console.log(input);

    return (
        <form>
            <div className='new-expense__controls'>
                <SingleInput inputData={'Nameee'} type='text' label='Title' />
                <SingleInput inputData={'Nameee'} type='number' label='Amount' />
                <SingleInput inputData={'Nameee'} type='date' label='Date' />
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add an expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;