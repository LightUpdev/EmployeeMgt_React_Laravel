import React from 'react';
import { useGlobalContext } from '../ContextApi';


const TableRow = ({Salary , Employee_name , id }) => {
  const { viewEmployee , fetchUpdateData } = useGlobalContext()
   
  return (
    <tr>
        <th scope="row">{id}</th>
        <td>{Employee_name}</td>
        <td>${Salary}</td>
        <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-success" onClick={()=>viewEmployee(id)} data-bs-toggle="modal" data-bs-target="#viewModal">View
          </button>
          <button type="button" className="btn btn-info"  onClick={()=> fetchUpdateData(id)} data-bs-toggle="modal" data-bs-target="#updateModal">Update</button>
          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>
        </div>
        </td>
      </tr>
  )
}

export default TableRow