import React, { Component } from 'react';
//import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
//import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
//import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import Entity from '../Entity/Entity';
import { Button, Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table,Container } from 'reactstrap';
import {Link} from "react-router-dom";


 
class RadioEntity extends Component {

    constructor() {
        super();
        this.state = {       
          type:''
        };
        
      }
    /*   */
     
  render() {
    function selectionChanged(event) {
      this.setState({type : event.target.value}) ;
    }
    this.selectionChanged = selectionChanged.bind(this);       
    
    return (
      <>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <b>
                  Please choose your entity type to list : 
                </b>
              </CardHeader>
              <CardBody>     
              <div onChange={ this.selectionChanged.bind(this) }>
                  <select /* value={this.state.gender} */ onChange={this.selectionChanged.bind(this)}> 
                    <option value="Palette" name="Palette"> Palette</option>
                    <option value="Container" name="Container">Container</option>
                    <option value="Box" name="Box">Box</option>
                    <option value="Product" name="Product">Product</option>
                  </select>
                  </div>
              </CardBody>
            </Card>
        </Col>
       </Row>
      {this.state.type && <Entity typeofentity={ this.state.type } ></Entity>   }     
     </>	    
    );
    }
  }



export default RadioEntity;
