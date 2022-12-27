<?php

use App\Http\Controllers\EmployeesController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// GETTING EMPLOYEES LIST
Route::get("/EmployeeList" , [EmployeesController::class , 'getEmployeeList'])->name("employee.list");

// GETTING SINGLE EMPLOYEE DETAIL
Route::post("/get/single/employee/detail" , [EmployeesController::class , 'singleEmployeeDetail']);

// FETCH SINGLE EMPLOYEE DETAIL TO BE DISPLAY IN FORM
Route::post("/get/update/employee/detail" , [EmployeesController::class , 'fetchEmployee']);

// UPDATE SINGLE EMPLOYEE DETAIL TO DATABASE
Route::POST("update/Employee/details/{id}", [EmployeesController::class , 'updateEmployeeDetails']);

// ADD NEW EMPLOYEE DETAIL TO DATABASE
Route::post("/add/newEmployee" , [EmployeesController::class , 'addNewEmployee'])->name("add.employee");

// DELETE EMPLOYEE DETAIL FROM DATABASE
Route::delete("delete/Employee/details/{id}" , [EmployeesController::class , 'deleteEmployeeDetails']);
