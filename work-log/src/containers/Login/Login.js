import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import validator from 'validator';

import API from '../../api';
import FooterBar from '../../components/FooterBar/FooterBar';

class Login extends Component {
    state = {
        name: '',
        password: '',
        errors: {
            name: '',
            password: ''
        },
        isLoggedIn: false
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
    }

    handleLogin = (event) => {
        event.preventDefault();
        let name = event.target.name.value;
        let password = event.target.password.value;
        let flag = 1;
        const nonErrors = {
            name: '',
            password: ''
        }
        if(validator.isEmpty(name, {ignore_whitespace: false})){
            flag = 0;
            const errors = this.state.errors;
            errors.name = 'User Name must not be empty';
            this.setState({
                errors: errors
            });
        }
        
        if(validator.isEmpty(password, {ignore_whitespace: false})){
            flag = 0;
            const errors = this.state.errors;
            errors.password = 'Enter a password';
            this.setState({
                errors: errors
            });
        }
        if(flag === 1){
            const login = {
                userName: name,
                password: password
            };
            API.post(`update/login`, login)
                .then(res => {
                    this.setState({
                        isLoggedIn: res.data,
                        errors: nonErrors
                    })
                    if(!this.state.isLoggedIn) {
                        const errors = this.state.errors;
                        errors.password = 'User Name or password is incorrect';
                        this.setState({
                            errors: errors
                        });
                    }
                })
        }
    }

    render() {
        const border = {
            margin: '12% 42% 10% 40%'
        }
        const align = {
            textAlign: 'center'
        }
        if(this.state.isLoggedIn){
            return <Redirect to='/Home' />
        }
        return (
            <div>
                <div style={border}>
                <h3 style={align}>Login Form</h3>
                <br></br>
                <Form onSubmit={this.handleLogin}>
                    <Form.Group controlId="formBasicUserName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control 
                            name="name"
                            type="text" 
                            placeholder="Enter the user name" 
                            value={this.state.name} 
                            onChange={this.handleNameChange} />
                        { this.state.errors.name !== '' ? <div><br></br>{this.state.errors.name}</div> : <div /> }
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            name="password"
                            type="password" 
                            placeholder="Enter password" 
                            value={this.state.password} 
                            onChange={this.handlePasswordChange} />
                        { this.state.errors.password !== '' ? <div><br></br>{this.state.errors.password}</div> : '' }
                    </Form.Group>
                    <div style={align}>
                    <Button 
                        variant="dark" 
                        type="submit">Login</Button>
                    </div>
                </Form>
            </div>
            <FooterBar />
            </div>
            
        );
    }
}

export default Login;