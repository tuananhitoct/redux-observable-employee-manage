import { action } from 'typesafe-actions';
import { Employee } from '../../models/Employess.model';

export enum EmployeesActionType {
    FETCH_LIST_EMPLOYEES = '[Employees] Fetch List Employess',
    FETCH_LIST_EMPLOYEES_SUCCESS = '[Employees] Fetch List Employess Success',
    FETCH_LIST_EMPLOYEES_FAILURE = '[Employees] Fetch List Employess Failure',
    ADD_NEW_EMPLOYEE = '[Employees] Add New Employee',
    ADD_NEW_EMPLOYEE_SUCCESS = '[Employees] Add New Employee Success',
    ADD_NEW_EMPLOYEE_FAILURE = '[Employees] Add New Employee Failure'
}

export const employeesAction = {
    fetchEployess: () => action(EmployeesActionType.FETCH_LIST_EMPLOYEES),
    fetchEployessSuccess: (listEmployees: Employee[]) => action(EmployeesActionType.FETCH_LIST_EMPLOYEES_SUCCESS, { data: listEmployees }),
    fetchEployessFailure: () => action(EmployeesActionType.FETCH_LIST_EMPLOYEES_FAILURE),
    addEmployee: (data: any) => action(EmployeesActionType.ADD_NEW_EMPLOYEE, { data }),
    addEmployeeSuccess: (newData: any) => action(EmployeesActionType.ADD_NEW_EMPLOYEE_SUCCESS, { data: newData }),
    addEmployeeFailure: () => action(EmployeesActionType.ADD_NEW_EMPLOYEE_FAILURE)
}
