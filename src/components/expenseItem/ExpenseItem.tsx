import './ExpenseItem.css'

interface ExpenseProps {
    title: string,
    date: Date,
    amount: number,
};

function ExpenseItem({ title, date, amount }: ExpenseProps) {

    const month = date.toLocaleString('en-us', { month: 'long' });
    const day = date.toLocaleString('en-us', { day: '2-digit' });
    const year = date.getFullYear();

    return <div className='expense-item'>
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${amount}</div>
        </div>
    </div>
}

export default ExpenseItem;