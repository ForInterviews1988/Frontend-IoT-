import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom';
const axios = require('axios');

class Registration extends Component {
   


// Written By Selim Soufargi


 
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
      url: 'http://localhost:3000/users',
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
   /*  if(this.state.authenticated) { return (
      <Redirect exact from="/#/" to="/#/" />
    ); } */
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form  onSubmit={this.handleSubmit} >
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" name="username" value = {this.state.username} onChange = {this.handleChange}  placeholder="Username" autoComplete="username" />
                    </InputGroup>
                    {/* <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" autoComplete="email" />
                    </InputGroup> */}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" name="password" value = {this.state.password}  onChange = {this.handleChange} placeholder="Password" autoComplete="new-password" />
                    </InputGroup>
                    {/* <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password" autoComplete="new-password" />
                    </InputGroup> */}
                    <Button color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Registration;
