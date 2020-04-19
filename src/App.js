import React, {Component} from 'react';
import './App.css';
import {Box, Image} from 'grommet';

class App extends Component {
    state = {
        products: []
      }
      componentDidMount() {
        fetch('https://www.mocky.io/v2/5e86ec5531000011d8814754')
        .then(res => res.json())
        .then((data) => {
          this.setState({ products: data })
        })
        .catch(console.log)
      }
// console.log(products.products.compareSummary)
// console.log(Object.values(image)) 
render() {
    const products = this.state.products;
    const images = products.products !== undefined ? products.products.compareSummary.images : '';
    const titles = products.products !== undefined ? products.products.compareSummary.titles : '';
    const productPricingSummary = products.products !== undefined ? products.products.compareSummary.productPricingSummary : '';
    const productIDs = [images].map(image =>
            console.log(Object.keys(image)));
    let productObj = () => {
//        product = {
//            
//        };
    };
    
  return (
      <div>
      {productIDs}
      <div>{
             [images].map(image =>
            Object.values(image).map(srcobj => (
            <Box height="small" width="small">
              <Image
                fit="cover"
                src={srcobj}
              />
            </Box>
            ))
          )}</div>
      </div>
  )