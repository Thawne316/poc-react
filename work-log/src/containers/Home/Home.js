import React, { Component } from 'react';
import { CardColumns } from 'react-bootstrap';
import Employees from '../../components/Employees/Employees';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import FooterBar from '../../components/FooterBar/FooterBar';
import API from '../../api';

class Home extends Component {
    state = {
        employees: []
    }

    componentDidMount() {
        API.get(`display/viewEmployees`)
            .then(response => {
                const employees = response.data;
                this.setState({
                    employees
                });
            })
    }

    render() {
        const border = {
            marginLeft: '10%',
            marginRight: '10%',
            marginTop: '5%',
            marginBottom: '5%'
          }
        return (
            <div>
                <NavigationBar />
                <div style={border}>
                <CardColumns>
                    <Employees 
                        employees={this.state.employees} />
                </CardColumns>
                </div>
                <FooterBar />
            </div>
        );
    }
}

export default Home;