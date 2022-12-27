<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EmployeesController extends Controller
{
    public function getEmployeeList(){
        try {
           $employee = Employee::orderBy("id" , "DESC")->get();
           return response()->json($employee);

        } catch (Exception $e) {
            Log::error($e);
        }
    }

    public function singleEmployeeDetail(Request $request){
        try {
           $employeeData = Employee::findOrFail($request->get("employeeId"));      
           return response()->json($employeeData);

        } catch (Exception $e) {
            Log::error($e);
        }
    }

    
    public function fetchEmployee(Request $request){
        try {
           $employeeData = Employee::findOrFail($request->get("employeeId"));      
           return response()->json($employeeData);

        } catch (Exception $e) {
            Log::error($e);
        }
    }

    

    public function addNewEmployee(Request $request)
    {
        try {
            Employee::create([
                "Employee_name"=> $request->EmployeeName,
                "Salary"=> $request->Salary,
            ]);
 
         } catch (Exception $e) {
             Log::error($e);
         }    
    }


    
    public function updateEmployeeDetails(Request $request , $id)
    { 
        Employee::findOrFail($id)->update([
            "Employee_name"=> $request->EmployeeName,
            "Salary"=> $request->Salary,
        ]);
        return $id;
    }


    public function deleteEmployeeDetails($id)
    {
        try {
            Employee::findOrFail($id)->delete();
 
         } catch (Exception $e) {
             Log::error($e);
         }  
    }


}
