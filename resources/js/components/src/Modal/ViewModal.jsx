import React from 'react';
import { useGlobalContext } from '../ContextApi';


const ViewModal = () => {
   const {singleEmployeeDetail , setSingleEmployeeDetail} = useGlobalContext()
    const {id , Employee_name , Salary} = singleEmployeeDetail;
    const closeModal = () => {
      setSingleEmployeeDetail([])
    }

  return (
    <div className="modal fade" id="viewModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title fw-bold" id="exampleModalLabel">Employee Details</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setSingleEmployeeDetail([])}></button>
        </div>
        <div className="modal-body">
          <div className='justify-content-around d-grid'>
            <label htmlFor="id"><b>Id:</b> {id}</label>
            <label htmlFor="name"><b>Name:</b>  {Employee_name}</label>
            <label htmlFor="salary"><b>Salary:</b>   {Salary}</label>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>closeModal()}>Close</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ViewModal