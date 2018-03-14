import React, { Component } from 'react';
import './Cart.css';
import firebase from '../../firebase';
import {CartDisplay} from './CartDisplay';
import {connect} from "react-redux";
import toastr from 'toastr';

class Cart extends Component {
    state = {
        products:[

        ]
    }
    componentWillMount () {
        // let products = this.state.products;
        // firebase.database().ref('products')
        //     .on("child_added", s=>{
        //         let product = s.val();
        //         product["id"] = s.key;
        //         products.push(product);
        //         this.setState({products});
        //     })
        this.getAllProducts();
    }

    getAllProducts = () =>{
        fetch('https://fixter-shop.herokuapp.com/products')
        .then(res=>{
            if(!res.ok)return toastr.error(res.message);
            return res.json()
        })
        .then(products=>{
            this.setState({products});
        });
    };

    render() {
        return (
                <div className="fl">
                    {this.state.products.map((p, index)=><CartDisplay  key={index} {...p}/>)}
                </div>

        );
    }
}

export default Cart;