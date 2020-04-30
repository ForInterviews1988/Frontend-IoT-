import React from 'react';
import { Combobox } from 'react-widgets';
//import '../../public/bootstrap/dist/css/bootstrap.min.css';


export default class NavigationBar extends React.Component {


    render() {
      var leftMenu = {
        'display': "table-cell",
        'width': 300,
        'background-color': "blue"
    }
        var myStyle = {
            fontSize: 12,
            color: '#FF0000'
          }
        return (
         
          <div>
                   <h2 style={myStyle,leftMenu}>NavigationTab : <br/>
                   <br/>menu<br/>menu<br/>menu<br/>menu</h2> 
          </div> 
        );
        }



}