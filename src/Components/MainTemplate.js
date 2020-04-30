import React from 'react';
//import { Combobox } from 'react-widgets';

export default class MainTemplate extends React.Component {


    render() {
      /* var leftMenu = {
        'display': "table-cell",
        'width': 300,
        'background-color': "blue"
    }
        var myStyle = {
            fontSize: 12,
            color: '#FF0000'
          } */
        return (

          <div>
            <head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://unpkg.com/@coreui/coreui@3.0.0-beta.4/dist/css/coreui.min.css" crossorigin="anonymous"></link>            
            </head>
            <title>CoreUI</title>
            <body class="c-app">
                <h1>Welcome to CoreUI</h1>
                <div class="container">
                    <div class="row">
                      <div class="col-xl-4">
                      <center>
                        One of three columns
                       </center>
                      </div>
                      <div class="col-xl-4">
                        <center>
                        One of three columns
                        </center>
                      </div>
                      <div class="col-xl-4">
                      <center>
                        One of three columns
                      </center>
                      </div>
                    </div>
                  </div>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js" integrity="sha384-L2pyEeut/H3mtgCBaUNw7KWzp5n9&#43;4pDQiExs933/5QfaTh8YStYFFkOzSoXjlTb" crossorigin="anonymous"></script>
                <script src="https://unpkg.com/@coreui/coreui@3.0.0-beta.4/dist/js/coreui.min.js"></script>
            </body>
          </div>
          /* {
                   <h2 style={myStyle,leftMenu}>NavigationTab : <br/>
                   <br/>menu<br/>menu<br/>menu<br/>menu</h2> 
           }*/ 
        );
        }

}