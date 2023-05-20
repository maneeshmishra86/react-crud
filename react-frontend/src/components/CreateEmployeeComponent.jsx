import React, { Component } from 'react';

class CreateEmployeeComponent extends Component {
    constructor(props){

        super(props);  

        this.state = {
            firstName :'maneesh',
            lastName: 'mishra',
            email: 'maneesh.mishra@db.com'
        }

      
    }

    render() {
        return (
            <div className='component'>
                     <h2>Create component</h2>
            </div>
        );
    }
}

export default CreateEmployeeComponent;