import React, { Component } from 'react';
import Palette from '../Palette/Palette';
import Box from '../Box/Box';
import Container from '../Container/Container';
import Product from '../Product/Product';

 
 const types = {
      Palette: {
          url: 'http://localhost:3000/entities/palette',        
      },
      Box: {
          url: 'http://localhost:3000/entities/box' },
      Container: {
          url: 'http://localhost:3000/entities/container',
             },
      Product: {
          url: 'http://localhost:3000/entities/product',
              }
}
 class Entity extends Component {
  
    constructor(props) {
        super(props);
        this.state = {    
          rows: [],
          rowupdate : false
        };
      }
      async componentDidMount(){
       
            const url = types[this.props.typeofentity]["url"] + '?page=1&limit=10';
            var response =  await fetch(url);
            const data =  await response.json();
            await this.setState({ rowsd : data["resultEntities"] }) ;  
            console.log(this.state.rowsd);   
            console.log(data);   

        };
  
      async componentDidUpdate(prevProps, prevState){
        
            if (prevProps.typeofentity !== this.props.typeofentity ) {
                  const url = types[this.props.typeofentity]["url"] + '?page=1&limit=10';
                  var response = await fetch(url);
                  const data = await  response.json();  
                  await this.setState({ rowsd: data["resultEntities"] }) ;
                  console.log(data);   
 
                  }
      }   
    render() {

        return (     
          <div>
            { this.state.rowsd && this.props.typeofentity==='Palette' && <Palette entityfordata={this.state.rowsd}></Palette>}
            { this.state.rowsd && this.props.typeofentity==='Box' && <Box entityfordata={this.state.rowsd}></Box>}
            { this.state.rowsd && this.props.typeofentity==='Container' && <Container entityfordata={this.state.rowsd}></Container>}     
            { this.state.rowsd && this.props.typeofentity==='Product' && <Product entityfordata={this.state.rowsd}></Product>}     

          </div>       
      );
    }
}
export default Entity;
