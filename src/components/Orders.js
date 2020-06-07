import React,{Component} from 'react';
import axios from 'axios';
import Order from './Order.js';
import './Order.css';

class orders extends Component {

    state = {
        fetchedOrders:[]
    }

    componentDidMount() {
        this.fetchOrders()
    }

    orderprocess = (fetchedOrders) => {
        this.setState({fetchedOrders})
      
      }
    
      fetchOrders = () => {
       axios.get("https://react-hooks-e4a1b.firebaseio.com/storeorders.json")
            .then((response) => {
    
                  let fetchedOrders = []
                    for ( let key in response.data ) {
                        let maindata = response.data[key]
                        fetchedOrders.push( {
                            total:maindata.cartTotal,
                            cart: maindata.cart,
                            date:maindata.date
                        } );
                    }
                    this.orderprocess(fetchedOrders)
            })
      }
      
    render() {
        let array = this.state.fetchedOrderssort((a,b) => a.date >= b.date);
        
    return (
        <div className = "ordercontainer">

          {array.map((value, idx) => (
            <Order
              key={idx}
              cart = {value.cart}
              cartTotal = {value.total}
              date = {value.date}
              ></Order>
          ))}
        </div>    

    );
    }
};

export default orders;