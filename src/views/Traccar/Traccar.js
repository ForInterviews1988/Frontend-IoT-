import React, { Component } from 'react';
//import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
//import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
//import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import Iframe from 'react-iframe'

 
class Traccar extends Component {
  render() {
     
    return (
      <div>
		<Iframe url="http://localhost:8082/"
        width="450px"
        height="450px"
        id="traccar"
        className="myClassname"
        display="initial"
        position="relative"/>


	  </div>
    );
  }
}

export default Traccar;
