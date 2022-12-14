import ExpenseItem, { ExpenseProps } from "../ExpenseItem/ExpenseItem";

function Expenses(props: { items: ExpenseProps[] }) {
    const expensesList = props.items.map(expense => <ExpenseItem key={expense.id} id={expense.id} title={expense.title} date={expense.date} amount={expense.amount}></ExpenseItem>)

    return (<div>
        {expensesList}
    </div>
)
}

export default Expenses;