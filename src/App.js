import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget'
import Remaining from './components/Remaining'
import ExpenseTotal from './components/ExpenseTotal'
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';

const App = () => {
    return (
        <div className="container">

            {/* Budget Stats */}
            <h1 className="mt-3">Budget Planner</h1>
            <div className="row mt-3">
                <div className="col-sm">
                    <Budget />
                </div>
                <div className="col-sm">
                    <Remaining />
                </div>
                <div className="col-sm">
                    <ExpenseTotal />
                </div>
            </div>

            {/* Expenses */}
            <h3 className="mt-3">Expenses</h3>
            <div className="row mt-3">
                <div className="col-sm">
                    <ExpenseList />
                </div>
            </div>

            {/* Expense Form */}
            <h3 className="mt-3">Add Expense</h3>
            <div className="row mt-3">
                <div className="col-sm">
                    <AddExpenseForm />
                </div>
            </div>
        </div>
    )
}

export default App
