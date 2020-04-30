import React from 'react';


export default class Beecon extends React.Component {

  constructor() {
    super();
    this.state = {  beecons:[] };
  }
  
   async componentDidMount() {
const url = "http://localhost:3000/beecons"
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ beecons: data[0].datamatrix })

    }

    render() {
      return (
        <div>
          <div class="jumbotron jumbotron-fluid">
              <div class="container">
                <h1 class="display-4">List of Beecons jumbotron</h1>
                    <p class="lead">
                        List of all beecons available in the database :{this.state.beecons}
                    </p>
              </div>
            </div>
        </div>
      );
      }
      
}

  