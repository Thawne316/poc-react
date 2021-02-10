import React, { Component } from 'react';

import Employee from './Employee/Employee';

class Employees extends Component {
    render() {
        return this.props.employees.map( ( employee, index ) => {
            return  <Employee
                        name={employee.name}
                        designation={employee.designation}
                        key={employee.id}>
                    </Employee>
        });
    }
}

export default Employees;