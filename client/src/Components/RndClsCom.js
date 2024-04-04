import React, { Component } from 'react'
import axios from 'axios'
import Product from './Product';

export default class RndClsCom extends Component {

    constructor(props) { 
        super(props);   
        this.state = { isLoading: true, products: [] }; 
      } 

      componentDidMount() {
        axios.get( `${process.env.REACT_APP_API_URL}/products`)
          .then((response) => {
            this.setState({
                isLoading: false,
                products: response.data
            });
          })
          .catch((error) => {
            console.log(error);
            this.setState({
                isLoading: false,
                products: []
            });
          })
          .finally(() => {
            
          });
    }


  render() {
    return (
      <>        
        {this.state.isLoading ? 
            <div>Loading ....</div> : 
            <div>{this.state.products.map((item) => <Product key={item._id} name={item.name} price={item.price} /> )}</div>}        
      </>
    )
  }
}