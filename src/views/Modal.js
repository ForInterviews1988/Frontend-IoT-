import React, {Component} from 'react';
const axios = require('axios');




class Modal extends Component {

    constructor(props){
        super(props);
        this.state={
            barcode: "",
            batchsize:"",
            verify:""
        }
       
     
    }
  /*   componentDidMount(props){
        this.setState({
            barcode: this.props.defaultBarcodeValue,
            batchsize: this.props.defaultBatchsizeValue,
            entityid: this.props.id,
            
        });
        console.log(this.state.barcode);

    } */

      componentWillReceiveProps(nextProps){

        this.setState({
            barcode: nextProps.defaultBarcodeValue,
            batchsize: nextProps.defaultBatchsizeValue,
            entityid: nextProps.id,
            
        });

        }
       async  barcodeHandler(e){
          await  this.setState({ barcode : e.target.value});
        }
        async batchsizeHandler(e) {
            await  this.setState({batchsize: e.target.value});
        }

render() {



    const showHideClassName = this.props.show ? "modal d-block display-block" : "modal display-none";

return (
<div > {this.props.show &&  /* this.props.defaultBarcodeValue  && this.props.defaultBarcodeValue && */ <div  className="modal d-block display-block" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">EDIT ROW</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>this.props.handleClose()}>
                        <span aria-hidden="true">                           
                            &times;
                        </span>
                    </button>
                </div>
                <div className="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6">
                                <p> 
                                    <span className="modal-lable">
                                        <center>
                                            Barcode
                                        </center>
                                    </span>
                                </p>
                            </div>  
                            <div class="col-md-6">
                                <input  value={this.state.barcode} /* defaultValue={this.props.defaultBarcodeValue}  */ onChange={(e) => {e.preventDefault(); this.barcodeHandler(e);}} />  
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <p>
                                    <span className="modal-lable">
                                        <center>
                                            Batchsize
                                        </center>
                                    </span> 
                                </p>
                            </div> 
                            <div class="col-md-6">
                                <input  ref={async (ref) =>  this.batchsize= await ref} value={this.state.batchsize} /* defaultValue={this.props.defaultBatchsizeValue}  */onChange={(e) => {e.preventDefault(); this.batchsizeHandler(e);}} />  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>this.props.handleClose()}>
                        Close
                    </button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={async (e) =>  {this.props.handleSave(await this.state.entityid,this.state.barcode,this.state.batchsize); await this.props.handleClose();}}>
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    </div>} </div>
    
)



}


}
export default Modal;