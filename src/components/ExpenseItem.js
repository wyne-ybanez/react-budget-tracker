import { TiDelete } from 'react-icons/ti'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext)

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    })
  }

  return (
    <li className="text-secondary bg-light list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge bg-primary rounded-pill me-3">
          €{props.cost}
        </span>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </div>
    </li>
  )
}

export default ExpenseItem
