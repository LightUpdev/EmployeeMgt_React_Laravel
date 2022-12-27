import React , {useState , useEffect, useContext} from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppContext = React.createContext();

// APP PROVIDER
const AppProvider = ({children}) =>{
    const [list , setList] = useState([]);
    const [loading , setLoading] = useState(true);
    const [singleEmployeeDetail , setSingleEmployeeDetail] = useState([])
    const [addEmployee , setAddEmployee] = useState([]);
    const [predefinedData , setPredefinedData] = useState([])

    const onChange =(e)=>{
        const {name , value} = e.target;
        setAddEmployee({...addEmployee , [name] : value })
    }
    
    // VIEW SINGLE EMPLOYEE DETAILS
    const viewEmployee=(id)=>{
       axios.post("/get/single/employee/detail" , {
        employeeId : id,
       }).then((res)=>{
            const singleEmployee = res.data;
            setSingleEmployeeDetail(singleEmployee);
            return singleEmployee;
       })
    }


    // FETCH SINGLE EMPLOYEE DATA INTO FORM FIELDS
    const fetchUpdateData=(id)=>{
       axios.post(`/get/update/employee/detail/` , {
        employeeId : id,
       }).then((res)=>{
            const singleEmployee = res.data;
            setPredefinedData( singleEmployee );
            return singleEmployee;
       })
    }

    // ADDING NEW DATA TO TABLE
    const addNewEmployee = async (e) => {
        e.preventDefault();
        const {EmployeeName, Salary} = addEmployee;
       await axios.post("/add/newEmployee" , {EmployeeName , Salary}).then(()=>{
        setTimeout(()=>{
          location.reload();
        },6000)  
        toast.success("Employee Added Successfully"); 
       });
    }

    // UPDATE SINGLE EMPLOYEE DETAILS TO DATABASE
    const updateEmployee=(id)=>{
     console.log(id);

    }

    // DELETE SINGLE EMPLOYEE DETAILS FROM DATABASE
    const deleteEmployee=async(id)=>{
       await axios.delete(`delete/Employee/details/${id}`).then(()=>{
        setTimeout(()=>{
          location.reload();
        },3000) 
        toast.error("Employee Deleted Successfully"); 
       });
    }

    // FETCH ALL EMPLOYEE LIST FROM DATABASE
    const fetchEmployList = () =>{
        setLoading(true);
      axios.get("/EmployeeList").then((res)=>{
        const employees = res.data;
        setList(employees);
        setLoading(false);
      })
    }

    useEffect(() =>{
      fetchEmployList();
    },[])



    return <AppContext.Provider
     value={
        {
            list,
            loading, 
            setLoading,
            updateEmployee,
            viewEmployee,
            deleteEmployee,
            singleEmployeeDetail,
            setSingleEmployeeDetail,
            addNewEmployee,
            addEmployee,
            setAddEmployee,
            onChange,
            predefinedData,
            fetchUpdateData,
            setPredefinedData
        }}> {children} </AppContext.Provider>   
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}


export  {AppContext , AppProvider}