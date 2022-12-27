import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../ContextApi';
import TableRow from './TableRow';
import "../../../../../resources/css/button.css";
import Loading from '../Loading';
import ViewModal from "../Modal/ViewModal"
import UpdateModal from '../Modal/UpdateModal';
import DeleteModal from "../Modal/DeleteModal";
import AddEmployee from '../Modal/AddEmployeeModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Table = () => {
  const {list , loading} = useGlobalContext()
  
  if(loading){
    return <Loading />
  }

  else{
     return (
      <>  
      <ToastContainer />
      <ViewModal />
      <UpdateModal />
      <AddEmployee />
      <DeleteModal />


      <button className='btn btn-secondary float-end' data-bs-toggle="modal" data-bs-target="#AddEmployee">Add Employee</button>

      { list.length ? 

      <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col" width="100px">Id</th>
        <th scope="col" width="100px">Name</th>
        <th scope="col" width="100px">Salary</th>
        <th scope="col" width="100px">Action</th>
      </tr>
    </thead>
    <tbody>
      { list.map((single)=>{
            const {id, Employee_name, Salary} = single;
            return(
              
           <TableRow 
            key={id} 
            id={id}
            Employee_name={Employee_name} 
            Salary={Salary} 
            />
        )
        }) 
    }
    </tbody>
  </table> : <p className='text-center display-6 fw-bold'>No employee data to display</p> } 
  </>
  
  )
  
}
   
 
}

export default Table