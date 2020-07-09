import * as React from 'react';
import { EmployeeProps, EmployeeState } from '../../models/Employess.model';
import { AppState } from '../../store/configStore';
import { connect } from 'react-redux';
import { employeesAction } from '../../store/Employees/employeesActions';

class Employees extends React.Component<EmployeeProps, EmployeeState> {

    componentDidMount() {
        this.props.loadListEmployees();
    }

    handleAddItemEmployees(): void {
        const data = {
            name: "An",
            email: "an@mail.com",
            age: 11,
            address: "Address"
        }
        this.props.addEmployee(data);
    }
    
    render(): any {
        const employees = this.props.employeesState.employees;
        const renderData: any = employees.map((item: any, index: number) => {
            return <li key={index}>{item && item.name ? item.name : null}</li>
        });

        return (
            <React.Fragment>
                <button type={'button'} onClick={() => this.handleAddItemEmployees()}>Add New</button>
                <div className="list-item">
                    {renderData}
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(store: AppState): any {
    return {
        employeesState: store.employeesState
    }
}

const mapDispatchToProps = {
    addEmployee: (data: any) => employeesAction.addEmployee(data),
    loadListEmployees: () => employeesAction.fetchEployess()
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);