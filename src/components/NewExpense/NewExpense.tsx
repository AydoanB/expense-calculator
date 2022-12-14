import { ExpenseProps } from '../../compiler/types';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

function NewExpense() {

    const expenseDataHandler = (enteredExpenseData: ExpenseProps) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        return expenseData;
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={expenseDataHandler} />
        </div>
    )
}
export default NewExpense;
