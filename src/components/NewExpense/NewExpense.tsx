import { ExpenseProps } from '../ExpenseItem/ExpenseItem';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

function NewExpense() {
    function handleExpenseDataHandler(enteredExpenseData: ExpenseProps){
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random.toString()
        };

        console.log(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={handleExpenseDataHandler} />
        </div>
    )
}
export default NewExpense;