import { ExpenseProps } from '../ExpenseItem/ExpenseItem';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'



function NewExpense() {

    const expenseDataHandler = function (enteredExpenseData: ExpenseProps) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        console.log(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={expenseDataHandler} />
        </div>
    )
}
export default NewExpense;
