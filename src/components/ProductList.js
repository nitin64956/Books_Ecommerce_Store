import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import BookFilter from './BookFilter';


export default class ProductList extends Component {
  

  render() {
    return (
       
          <div className="container">
            <Title name="Find" title="Your Books Here" />
            <BookFilter/>
            <div className="column">
              <ProductConsumer>
                
                {value => {
                  let products = value.sortedbooks;
                  return  <React.Fragment> 
                    <div className = "row">
                   { products.map(product => {
                            return <Product key={product.id} product={product} />;
                      }) } 
                  </div> 

                  <div className = "d-flex justify-content-center">

                  </div>
                    </React.Fragment>;
                }}

             </ProductConsumer>
            </div>
          </div>
    );
  }
}
