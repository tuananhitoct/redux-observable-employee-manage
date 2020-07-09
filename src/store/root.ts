import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { employeesEpics } from './Employees/employeesEpics';
import { employeesReducer } from './Employees/employeesReducer';

export const rootReducer = combineReducers({
    employeesState: employeesReducer
});

export const rootEpic = combineEpics(...employeesEpics);
