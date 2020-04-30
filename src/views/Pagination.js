import React, { Component } from 'react';


const pageNumbers = []
var pn = 1;
class Pagination extends Component {
    constructor(props) {
        super(props);
             
     }
  componentDidMount(){
    if (pn > Math.ceil(this.props.totalPosts / this.props.postsPerPage) ){
        while(pageNumbers.length>0){
        pageNumbers.pop();
                }
    }

    for ( let i = 1 ; i <= Math.ceil(this.props.totalPosts / this.props.postsPerPage);i++ ){
           pageNumbers.push(i);  
         pn++;
        
    }

}
 




render() {
    
return (
   <div>
        <nav>
            <ul className="pagination">
            {pageNumbers.map((number,index) => (
                <li  key={index} className="page-item">
                    <a onClick={async (e)=>  {    
                            await e.preventDefault() ; await this.props.paginate(number); await this.props.refresh;}} href="!#" className="page-link">
                        {number}
                    </a>
                </li>
            ))}
            </ul>
        </nav>
    </div>
)
        }}
 
export default Pagination;