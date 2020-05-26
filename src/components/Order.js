import React from 'react';

import  './Order.css';

const order = ( props ) => {
    const cartitems = [];

    for ( let cart in props.cart ) {
        let cartitem = props.cart[cart]
        cartitems.push(
            {
                name: cartitem.title,
                count: cartitem.count
            }
        );
    }

    const cartitemoutput = cartitems.map(item => {
        return <span 
            style={{
                textTransform: 'capitalize',
                display: 'row',
                margin: '0 8px',
                border: '1px solid black',
                backgroundColor:'orange',
                borderradius: '2px',
                padding: '5px'
                }}
            key={item.name}>{item.name} X {item.count} </span>;
    });

    return (
        <div className="Order">
            <p>Order Date: {props.date.split("T")[0] + " " + props.date.split("T")[1].replace("Z",'')} </p>
            <p>Items: {cartitemoutput}</p>
            <p>TotalPrice: <strong>USD {Number.parseFloat( props.cartTotal ).toFixed( 2 )}</strong></p>
        </div>
    );
};

export default order;