import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import BookFilter from './BookFilter';


const  pagesize = 8;
let start = 0;
let end = 8;
let totalPages = 3;
export default class ProductList extends Component {
  state = {
    currentPage: 1,
    totalPages:3,
  };

  changeCurrentPage = numPage => {
    if (numPage === 1) {
      start = 0;
      end = 8;
    }
    else {
      end = numPage * pagesize;
      start = end - pagesize;
    }
    this.setState({currentPage:numPage});
  };

  render() {
    return (
       
          <div className="container">
            <Title name="Find" title="Your Books Here" />
            <BookFilter/>
            <div className="column">
              <ProductConsumer>
                
                {value => {
                  let products = value.sortedbooks.slice(start,end);
                  totalPages = Math.ceil(value.sortedbooks.length/pagesize);
                  
                  
                  return  <React.Fragment> 
                    <div className = "row">
                   { products.map(product => {
                            return <Product key={product.id} product={product} />;
                      }) } 
                  </div> 

                  <div className = "d-flex justify-content-center">

                  <Pagination
                  currentPage={totalPages < this.state.currentPage ? 1 : this.state.currentPage}
                  totalPages={totalPages}
                  changeCurrentPage={this.changeCurrentPage}
                  theme="bottom-border"
                        />
                  </div>
                    </React.Fragment>;
                }}

         
             </ProductConsumer>
            </div>
          </div>
    );
  }
}
