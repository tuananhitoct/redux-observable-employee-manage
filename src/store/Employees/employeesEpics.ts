import { ActionsObservable, StateObservable } from "redux-observable";
import { AppState } from "../configStore";
import { EmployeesAction } from "./employeesReducer";
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { isOfType } from "typesafe-actions";
import { EmployeesActionType, employeesAction } from "./employeesActions";
import { getEmployees, addNewEmployee } from "../../api/Employees";
import { from, of } from "rxjs";

const fetchEmployeesEpic = (action$: ActionsObservable<EmployeesAction>, state$: StateObservable<AppState>) => action$.pipe(
    filter(isOfType(EmployeesActionType.FETCH_LIST_EMPLOYEES)),
    switchMap(() => {
        return from(getEmployees()).pipe(
            map((response: any) => {
                if(response && response.data) {
                    return employeesAction.fetchEployessSuccess(response.data)
                } else {
                   return employeesAction.fetchEployessFailure()
                }
            }),
            catchError((err: any) => {
                return of(employeesAction.fetchEployessFailure());
            })
        );
    })
);

const addEmployee = (action$: ActionsObservable<EmployeesAction>, state$: StateObservable<AppState>) => action$.pipe(
    filter(isOfType(EmployeesActionType.ADD_NEW_EMPLOYEE)),
    map((action: any) => action.payload),
    switchMap((payload: any) => {
        return from(addNewEmployee(payload.data)).pipe(
            map((response: any) => {
                if(response) {
                    return employeesAction.addEmployeeSuccess(payload.data);
                } else {
                    return employeesAction.addEmployeeFailure();
                }
            }),
            catchError((err: any) => of(employeesAction.addEmployeeFailure())) 
        )
    })
)

export const employeesEpics = [
    fetchEmployeesEpic,
    addEmployee
];