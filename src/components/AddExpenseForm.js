const AddExpenseForm = () => {
    return (
        <form>
            <div className="row">
                <div className="col-sm">
                    <label for="name">Name</label>
                    <input required="required" type="text" className="form-control" id="name"></input>   
                </div>
                <div className="col-sm">
                    <label for="cost">Cost</label>
                    <input required="required" type="text" className="form-control" id="cost"></input>
                </div>
                <div className="col-sm mt-4">
                    <button type="submit" className="btn btn-primary rounded-pill">
                        save
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm