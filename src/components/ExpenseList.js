import ExpenseItem from './ExpenseItem'
import { AppContext } from '../context/AppContext'
import { useContext, useEffect, useState } from 'react'

const ExpenseList = () => {
  const { expenses } = useContext(AppContext)

  const [filteredExpenses, setfilteredExpenses] = useState(expenses || [])

  useEffect(() => {
    setfilteredExpenses(expenses)
  }, [expenses])

  const handleChange = (event) => {
    const searchResult = expenses.filter((filteredExpense) =>
      filteredExpense.name.toLowerCase().includes(event.target.value)
    )
    setfilteredExpenses(searchResult)
  }

  return (
    <div>
      <input
        type="text"
        class="form-control mb-2 mr-sm-2"
        placeholder="Type to search..."
        onChange={handleChange}
      />
      <ul className="list-group">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </div>
  )
}

export default ExpenseList
