import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import ViewBudget from './ViewBudget'
import EditBudget from './EditBudget'

const Budget = () => {
  // We exported budget in App Context Provider
  const { budget, dispatch } = useContext(AppContext)
  const [isEditing, setIsEditing] = useState(false)

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = (value) => {
    dispatch({
      type: 'SET_BUDGET',
      payload: value,
    })
    setIsEditing(false)
  }

  return (
    <div className="alert alert-warning p-2 d-flex align-items-center">
      {isEditing ? (
        <EditBudget
          handleSaveClick={handleSaveClick}
          budget={budget}
        ></EditBudget>
      ) : (
        <ViewBudget
          handleEditClick={handleEditClick}
          budget={budget}
        ></ViewBudget>
      )}
    </div>
  )
}

export default Budget
