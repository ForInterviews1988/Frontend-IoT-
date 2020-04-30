import {Component}from 'react';
 
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom';
const axios = require('axios');


// Written By Selim Soufargi


class Login extends Component {

constructor(props){
    super(props);


    this.state = {
      authenticated : false,
          username : "",
         password : ""
    };
    

}
handleSubmit = this.handleSubmit.bind(this);
handleChange = this.handleChange.bind(this);

handleChange(event){
    this.setState({
        [event.target.name] : event.target.value
    });
}
async handleSubmit(event,props){
  event.preventDefault();

     const {username, password} = this.state;
     
     await axios({
      method: 'post',
      url: 'http://localhost:3000/login',
      data: {
        username : username,
        password : password
      }
    }).then(response=>{
      if(response){
        
          console.log(response);
          this.setState({ authenticated : true });
          console.log(this.state.authenticated);
          
 
      }

  });
    /*  await axios.post('http://localhost:3000/login', { username: username, password : password}).then(response=>{
        if(response){
            console.log(response);
            this.setState({ authenticated : true });
        }
 
    }); */
  }

    render() {
 
      if(this.state.authenticated) { return (
        <Redirect exact from="/#/" to="/#/dashboard" />
      ); }

        return (
          <div className="app flex-row align-items-center">
            <Container>
              <Row className="justify-content-center">
                <Col md="8">
                  <CardGroup>
                    <Card className="p-4">
                      <CardBody>
                        <Form onSubmit={this.handleSubmit}>
                          <h1>Login</h1>
                          <p className="text-muted">Sign In to your account </p>
                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-user"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input type="text"   name="username" value = {this.state.username} onChange = {this.handleChange} placeholder="Username" autoComplete="username" />
                          </InputGroup>
                          <InputGroup className="mb-4">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-lock"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input type="password" name="password" value = {this.state.password} placeholder="Password"  onChange = {this.handleChange}  autoComplete="current-password" />
                          </InputGroup>
                          <Row>
                            <Col xs="6">
                              <Button color="primary" className="px-4">Login</Button>
                            </Col>
                            <Col xs="6" className="text-right">
                              <Button color="link" className="px-0">Forgot password?</Button>
                            </Col>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                    <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                      <CardBody className="text-center">
                        <div>
                          <h2>Sign up</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                          <Link to="/register">
                            <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                          </Link>
                        </div>
                      </CardBody>
                    </Card>
                  </CardGroup>
                </Col>
              </Row>
            </Container>

          </div>
        );
        

      }
    }
    





export default Login;
