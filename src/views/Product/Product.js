import React, { Component, useState } from 'react';
import { Col, Row, Table, Card, CardBody, CardColumns, CardHeader ,Button} from 'reactstrap';
import Pagination from '../Pagination';
import Modal from '../Modal';
const axios = require('axios');


class Product extends Component {
  constructor(props) {
     super(props);
     this.state = {       
      posts:[],
      currentPage:1,
      postsPerPage: 5,
      show: false,
      batchsizemodal:'',
      barcodemodal:"",
      entityid:0,
      verifydeletelimitcase: false,
      verifydeletelimitcaserp: false,
       
    };

    
    // bind function to events 

    this.paginate = this.paginate.bind(this);

    // bind function to events 

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.saveChanges = this.saveChanges.bind(this);



   }

  async componentDidMount(){
    await axios.get('http://localhost:3000/entities/product?page=1&limit=10').then( response  =>  {
        if(response){
          this.setState({posts:response.data["resultEntities"]});
          this.setState({indexOfLastPost : this.state.currentPage * this.state.postsPerPage});
          this.setState({indexOfFirstPost : this.state.indexOfLastPost - this.state.postsPerPage});
          this.setState({currentPosts :  this.state.posts.slice(this.state.indexOfFirstPost,this.state.indexOfLastPost) });

        }

    });
   
  }



  // Methods to show hide Modal
  async showModal(id,barcode,batchsize){
    await this.setState({entityid:id});
    await this.setState({ show: true });
    await this.setState({ barcodemodal: barcode });
    await this.setState({ batchsizemodal: batchsize });

  
  }
  

  hideModal = () => {
    this.setState({ show: false });
  };

  
// Delete Entities

   async deleteItem(entityid){
    if (window.confirm("Delete the item?")) {
    
        await axios.delete('http://localhost:3000/entities/product/'+entityid).then( response  =>  {
          if(response){
          }

        });
        await axios.get('http://localhost:3000/entities/product?page=1&limit=10').then( response  =>  {
                if(response){
                  this.setState({posts:response.data["resultEntities"]});
                  this.setState({indexOfLastPost : this.state.currentPage * this.state.postsPerPage});
                  this.setState({indexOfFirstPost : this.state.indexOfLastPost - this.state.postsPerPage});
                  this.setState({currentPosts :  this.state.posts.slice(this.state.indexOfFirstPost,this.state.indexOfLastPost) });
                if (this.state.currentPosts.length <= this.state.postsPerPage){
                  axios.get('http://localhost:3000/entities/product?page=1&limit=10').then(  async response  =>     {
                  if(response){
                    await this.setState({posts:response.data["resultEntities"]});
                    await this.setState({indexOfLastPost : this.state.currentPage * this.state.postsPerPage});
                    await this.setState({indexOfFirstPost : this.state.indexOfLastPost - this.state.postsPerPage});
                    await this.setState({currentPosts :  this.state.posts.slice(this.state.indexOfFirstPost,this.state.indexOfLastPost) });
                    await this.setState({verifydeletelimitcase: true});
                    var pageNumbers=[]  ;
                    for ( let i = 1 ; i <= Math.ceil(this.state.posts.length / this.state.postsPerPage);i++ ){
                      await pageNumbers.push(i);                
                    }
                    await  this.setState({verifydeletelimitcase : true });
                    if (this.state.currentPage === pageNumbers.length+1){
                      await this.setState({currentPage:this.state.currentPage-1});await  this.setState({verifydeletelimitcaserp : true });
                    }
                    await this.refreshEntitiesList();
                  }
          
              });     
                    }
            }});
  } 
  
 }

// EDIT Entities

  async saveChanges (entityid,barcode,batchsize) {
     const updateData = {
       "barcode":barcode,
       "batchsize":batchsize,
     }
     await axios.put('http://localhost:3000/entities/product/'+entityid,updateData).then( response  =>  {if (response.data!="OK") {window.alert(response.data);} else {/* window.confirm(response.json().data); */}
    })
        

        


    await axios.get('http://localhost:3000/entities/product?page=1&limit=10').then( response  =>  {
          if(response){
            console.log(response.data["resultEntities"]);
            this.setState({posts:response.data["resultEntities"]});
            console.log(this.state.posts);
            this.setState({indexOfLastPost : this.state.currentPage * this.state.postsPerPage});
            this.setState({indexOfFirstPost : this.state.indexOfLastPost - this.state.postsPerPage});
            this.setState({currentPosts :  this.state.posts.slice(this.state.indexOfFirstPost,this.state.indexOfLastPost) });

       
          }
        });
  }


  // refresh list of entities after saving the changes in the modal 


   async refreshEntitiesList() {
   await axios.get('http://localhost:3000/entities/product?page=1&limit=10').then( response  =>  {
        if(response){
          this.setState({posts:response.data["resultEntities"]});
          this.setState({indexOfLastPost : this.state.currentPage * this.state.postsPerPage});
          this.setState({indexOfFirstPost : this.state.indexOfLastPost - this.state.postsPerPage});
          this.setState({currentPosts :  this.state.posts.slice(this.state.indexOfFirstPost,this.state.indexOfLastPost) });

        }

    });
     
  } 

  // Display List of Entities in a Tab for the interface

   entitiesList() {

    if ( this.state.currentPosts) {
        return   this.state.currentPosts.map(    
            (row) => { return <tr> <td> <center> { row["entityid"]}</center> </td><td><center> {row["batchsize"]}</center> </td><td> <center>{row["barcode"]} </center> </td> <td> <center><Button  color="ghost-info" onClick={ (e) => { this.showModal(row["entityid"],row["barcode"],row["batchsize"])}}>EDIT</Button> / <Button  color="ghost-info" onClick={() => this.deleteItem(row["entityid"])}>DELETE</Button> </center></td></tr> ;}
         )
    } else {
        return <>
            <td  className="text-center">No Records Found.</td>
        </>
    }
}



// Calculate the list of pages (1,2,3..) required for paginating the list of entities and set the current page

 async paginate (pageNumber)   { 
  await this.setState({currentPage:pageNumber});  
  await this.setState({indexOfLastPost : this.state.currentPage * this.state.postsPerPage});
  await this.setState({indexOfFirstPost : this.state.indexOfLastPost - this.state.postsPerPage});
  await this.setState({currentPosts :  this.state.posts.slice(this.state.indexOfFirstPost,this.state.indexOfLastPost) }); 
}


render() {

  return (
    
 <div>
          <Row>
              <Col>
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify"></i> Entities Table
                    <button style={{ float:"right"}} type="submit" onClick={()=>this.refreshEntitiesList()}><i class="icon-refresh"></i> </button>
                  </CardHeader>
                  <CardBody>
                    <Table hover bordered striped responsive size="sm">
                      <thead>
                      <tr>
                        <th><center>Entity id</center></th>
                        <th><center>Batch Size</center></th>
                        <th><center>Bar Code</center> </th>
                        <th><center>Update/Delete</center></th>
                      </tr>
                      </thead>
                      <tbody>
                      { this.state.currentPosts && this.entitiesList() }
                      </tbody>
                    </Table>
                   {/* Pagination */} 
                   {this.state.posts.length   && !this.state.verifydeletelimitcase && <Pagination postsPerPage={this.state.postsPerPage} totalPosts={ this.state.posts.length }  paginate={this.paginate}   refresh={this.refreshEntitiesList} />}
                   {this.state.posts.length   && this.state.verifydeletelimitcase && !this.state.verifydeletelimitcaserp && <Pagination postsPerPage={this.state.postsPerPage} totalPosts={ this.state.posts.length }  paginate={this.paginate}   refresh={this.refreshEntitiesList} />}
                   {this.state.posts.length  && this.state.verifydeletelimitcase && this.state.verifydeletelimitcaserp && <Pagination postsPerPage={this.state.postsPerPage} totalPosts={ this.state.posts.length }  paginate={this.paginate}   refresh={this.refreshEntitiesList} />}

                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Modal  defaultBarcodeValue={this.state.barcodemodal} defaultBatchsizeValue={this.state.batchsizemodal} id = {this.state.entityid} show={this.state.show} handleClose={this.hideModal} handleSave={this.saveChanges} >
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        </div>    
  );
}
}
  
     


 

export default Product;



