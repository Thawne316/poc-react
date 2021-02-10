import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import NavigationBar from '../NavigationBar/NavigationBar';
import FooterBar from '../FooterBar/FooterBar';
import API from '../../api';

class WorkLog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: this.props.location.propsValue.employeeName,
            logData: []
        }
    }

    componentDidMount() {
        API.get(`display/viewDetails/${this.state.employeeName}`)
            .then(response => {
                const logData = response.data;
                this.setState({
                    logData
                });
            })
        
    }

    render() {
        const border = {
            marginLeft: '10%',
            marginRight: '10%',
            marginTop: '10%',
            marginBottom: '20%'
          }
        return (
            <div>
                <NavigationBar />
                <div style={border}>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Project Name</th>
                            <th>Work done</th>
                            <th>Time spent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.logData.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{data.loggedDate}</td>
                                        <td>{data.projectName}</td>
                                        <td>{data.taskDone}</td>
                                        <td>{data.timeSpentOnProject}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                </div>
                <FooterBar />
            </div>
        );
    }
}

export default WorkLog;