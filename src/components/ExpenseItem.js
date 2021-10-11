import { TiDelete } from 'react-icons/ti'

const ExpenseItem = (props) => {
  return (
    <li className="text-secondary bg-light list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge bg-primary rounded-pill me-3">
          €{props.cost}
        </span>
        <TiDelete size="1.5em"></TiDelete>
      </div>
    </li>
  )
}

export default ExpenseItem
