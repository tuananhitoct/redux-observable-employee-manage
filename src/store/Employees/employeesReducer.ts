import { employeesAction, EmployeesActionType } from "./employeesActions";
import { ActionType } from "typesafe-actions";
import { Employee } from "../../models/Employess.model";
import { Reducer } from "redux";

export type EmployeesAction = ActionType<typeof employeesAction>;


export type EmployeesState = {
    employees: Employee[]
}

const initialState: EmployeesState = {
    employees: []
}

export const employeesReducer: Reducer<EmployeesState, EmployeesAction> = (state: EmployeesState = initialState, action: EmployeesAction) => {
    switch(action.type) {
        case EmployeesActionType.FETCH_LIST_EMPLOYEES_SUCCESS : {
            return {
                ...state,
                employees: action.payload.data
            }
        }
        case EmployeesActionType.ADD_NEW_EMPLOYEE_SUCCESS : {
            return {
                ...state,
                employees: [...state.employees, action.payload.data]
            }
        }
        default: {
            return state;
        }
    }
}
