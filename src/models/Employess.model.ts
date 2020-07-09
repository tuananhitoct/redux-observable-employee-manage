export interface Employee {
    name: string;
    age: number;
    email: string;
    address: string;
    avatar: string;
}

export interface EmployeeProps {
    employeesState: {
        employees: Employee[]   
    },
    addEmployee: (data: any) => void,
    loadListEmployees: () => void
}

export interface EmployeeState {
}