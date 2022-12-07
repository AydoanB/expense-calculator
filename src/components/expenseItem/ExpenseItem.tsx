import ExpenseDate from '../expenseDate/ExpenseDate';
import './ExpenseItem.css'

interface ExpenseProps {
    title: string,
    date: Date,
    amount: number,
};

function ExpenseItem({title, amount, date}: ExpenseProps) {
    return <div className='expense-item'>
        <ExpenseDate date = {date} ></ExpenseDate>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${amount}</div>
        </div>
    </div>
}

export default ExpenseItem;