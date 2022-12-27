import React from 'react';
import { useGlobalContext } from '../ContextApi';


const AddEmployee = () => {
   const {addNewEmployee , addEmployee , onChange} = useGlobalContext()


  return (
    <div className="modal fade" id="AddEmployee" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title fw-bold" id="exampleModalLabel">Add Employee</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            {/* EMPLOYEE MODAL FORM */}
        <form onSubmit={addNewEmployee}>
            <div className="mb-3">
                <label htmlFor="EmployeeName" className="form-label">Name</label>
                <input type="text" className="form-control" id="EmployeeName" name='EmployeeName' value={addEmployee["name"]} onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="Salary" className="form-label">Salary</label>
                <input type="text" className="form-control" id="Salary" name='Salary' value={addEmployee["name"]} onChange={onChange}/>
            </div>
            <button type="submit" className="btn btn-success">Add Employee</button>
        </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddEmployee