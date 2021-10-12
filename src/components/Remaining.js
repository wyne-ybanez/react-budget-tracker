import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext)

  // zero is the starting value of array
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost)
  }, 0)

  return (
    <div className="alert alert-success">
      <span>Remaining: €{budget - totalExpenses}</span>
    </div>
  )
}

export default Remaining
