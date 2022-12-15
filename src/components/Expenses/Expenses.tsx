import { ExpenseProps } from "../../compiler/types";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

function Expenses(props: { items: ExpenseProps[] }) {

    console.log(props.items);

    return (
        <div>
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}></ExpenseItem>))}
        </div>
    )
}

export default Expenses;