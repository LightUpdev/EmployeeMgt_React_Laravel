import React from 'react';
import { useGlobalContext } from '../ContextApi';


const DeleteModal = () => {
   const {deleteEmployee,list} = useGlobalContext()
   const id = list.map((item) =>{
    return item.id
   } )


  return (
    <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title fw-bold" id="exampleModalLabel">Confirm to Delete Employee Data</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <p className='text-danger fw-bold'>Are you sure you want to delete?</p>
        </div>
        <div className="modal-footer">
        <button type="button" className="btn btn-danger" onClick={()=>deleteEmployee(id)}>Yes</button>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DeleteModal