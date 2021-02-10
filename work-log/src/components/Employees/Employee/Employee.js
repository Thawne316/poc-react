import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const border = { 
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '10%',
    marginRight: '10%'
}

class Employee extends Component {
    render() {
        return (
            <Card className="text-center" style={border} hoverable="true">
                <br></br>
                <Card.Title>{this.props.name}</Card.Title>
                <br></br>
                <Card.Subtitle>{this.props.designation}</Card.Subtitle>
                <br></br>
                <Link to={{
                    pathname: '/WorkLog',
                    propsValue: {
                        employeeName: this.props.name
                    }  
                }}>
                    <Button style={border} variant="dark">View log</Button>
                </Link>
                
            </Card>
        );
    }
}

export default Employee;