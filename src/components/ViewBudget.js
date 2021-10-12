const ViewBudget = (props) => {
  return (
    <div>
      <span>Budget: €{props.budget}</span>
      <button
        type="button"
        className="btn btn-light ms-2 px-2 rounded-pill"
        onClick={props.handleEditClick}
      >
        Update
      </button>
    </div>
  )
}

export default ViewBudget
