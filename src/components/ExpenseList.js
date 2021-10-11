import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
    const expenses = [
        {
            id: 1,
            name: 'Shopping',
            cost: 50,
        },
        {
            id: 2,
            name: 'Holidays',
            cost: 300,
        },
        {
            id: 3,
            name: 'Fuel',
            cost: 40,
        },
        {
            id: 4,
            name: 'Groceries',
            cost: 30,
        },
        {
            id: 5,
            name: 'Presents',
            cost: 200,
        }
    ];

    return (
        <ul className="list-group">
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
            ))}
        </ul>
    )
}

export default ExpenseList