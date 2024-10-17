import React from 'react'
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer' 
import Baner from './Banner/Baner';
import ProductList from './ProductList/ProductList';
const HomePage = (props) => {
  const { handleAddToCart } = props;
  return (
    <>
      <Baner />
      <ProductList handleAddToCart={handleAddToCart} />
    </>
  );
};


export default HomePage
