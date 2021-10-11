const ExpenseItem = (props) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span>
                </span>
            </div>
        </li>
    )
}