import { useState } from 'react'

const EditBudget = (props) => {
  const [value, setValue] = useState(props.budget)
  return (
    <div className="d-flex">
      <input
        required="required"
        type="number"
        className="form-control"
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type="button"
        className="btn btn-primary ms-3"
        onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </div>
  )
}

export default EditBudget
