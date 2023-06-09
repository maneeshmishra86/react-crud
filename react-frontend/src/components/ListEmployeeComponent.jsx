import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService.js';
import {Router, browserHistory} from 'react-router-dom';



class ListEmployeeComponent extends Component {

    constructor(props){

        super(props);
        
        console.log(this.props.history);     

        this.state = {
            employee : []
        }
        this.addEmployee = this.addEmployee.bind(this);
        
    }


    componentDidMount(){
        
        EmployeeService.getEmployees().then(res=>{
            this.setState({employee: res.data})
        });
    }

    addEmployee(){
        
        this.props.history.push("/add-employee");
        console.log('in add employee');
    }

    render() {
        
        return (
            <div>
                <h2 className='text-center'>Employee List</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions </th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.employee.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>    
                                            <td>{employee.lastName}</td>    
                                            <td>{employee.emailId}</td>    
                                            
                                        </tr>
                                )
                            }

                        </tbody>

                    </table>

                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;