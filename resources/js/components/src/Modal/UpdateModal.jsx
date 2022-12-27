import React, { useState } from 'react';
import { useGlobalContext } from '../ContextApi';
import { useForm, Controller } from "react-hook-form";

const UpdateModal = () => {
   const {predefinedData , updateEmployee, setPredefinedData } = useGlobalContext()
    const {id , Employee_name , Salary} = predefinedData;
    const [newEmployeeName , setNewEmployeeName] = useState("")
    const [newEmployeeSalary , setNewEmployeeSalary] = useState("")

    // const { register, handleSubmit, setValue } = useForm({
    //   defaultValues: {
    //     newEmployeeName: '',
    //     newEmployeeSalary: '',
    //   }
    // });

    // const handleChange = (e) => {
    //     setNewEmployeeName(e.target.value)
    // }
    



  return (

    <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title fw-bold" id="exampleModalLabel">Update Employee Data</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setPredefinedData([])}></button>
        </div>
        <div className="modal-body">
            {/* EMPLOYEE MODAL FORM */}
        <form>
            <div className="mb-3">
                <label htmlFor="employeeName" className="form-label">Name</label>
                <input type="text" className="form-control" id="employeeName" editable="true" value={Employee_name} />
            </div>
            <div className="mb-3">
                <label htmlFor="employeeSalary" className="form-label">Salary</label>
                <input type="text" className="form-control" id="employeeSalary" value={Salary} />
            </div>
        </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>setPredefinedData([])}>Close</button>
          <button type="submit" className="btn btn-primary" onClick={()=>updateEmployee(id)}>Save changes</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UpdateModal