import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css'
import { useState } from 'react'

export interface ExpenseProps {
    id: string,
    title: string,
    date: Date,
    amount: number,
};

function ExpenseItem({ title, amount, date }: ExpenseProps) {
    const [newTitle, setTitle] = useState<string>(title);

    return <div onClick={() => setTitle('Update')} className='expense-item'>
        <ExpenseDate date={date} ></ExpenseDate>
        <div className='expense-item__description'>
            <h2>{newTitle}</h2>
            <div className='expense-item__price'>${amount}</div>
        </div>
    </div>
}

export default ExpenseItem;