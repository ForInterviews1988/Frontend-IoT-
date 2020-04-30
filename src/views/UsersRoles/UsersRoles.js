import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usersData from '../Users/UsersData'
const axios = require('axios');

function UserRow(props) {
  const user = props.user
  const userLink = `/users/${user.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.userid.toString()}>
      <th scope="row"><Link to={userLink}>{user.userid}</Link></th>
      <td><Link to={userLink}>{user.username}</Link></td>
      <td>{user.username}</td>
      <td>{user.role}</td>
      <td><Link to={userLink}><Badge color={getBadge(user.role)}>{user.role}</Badge></Link></td>
    </tr>
  )
}

class Users extends Component {
    constructor(props){
            super(props);
            this.state = {
                usersData : []
                };  
          }
 async componentDidMount(){
   await axios.get('http://localhost:3000/users').then( response  =>  {
        if(response){
             this.setState({usersData : response});
        }
        console.log(this.state.userList);

    });
    const data =  this.state.usersData;
    this.setState({
        userList: data.data.filter((user) => user.userid > 10)
    });
    
 
    }

        
   
 



   render() {
    const userList = usersData.filter((user) => user.id < 10)

 

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users <small className="text-muted"></small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">email</th>
                      <th scope="col">registered username</th>
                      <th scope="col">role</th>
                      <th scope="col">status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.userList && this.state.userList.map((user, index) =>
                      <UserRow key={index} user={user}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;
