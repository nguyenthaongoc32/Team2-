import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import { Link, useParams } from "react-router-dom";
const ProductList = ({ handleAddToCart }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // const params = useParams();
  // const { id } = params || {};

  const handleFetchProducts = async () => {
    try {
      const apiResponse = await axios.get(
        `https://66fcd0b0c3a184a84d18118c.mockapi.io/api/data`
      );
      const productsData = apiResponse.data;
      const filterProduct = productsData.filter(
        (product) => product.id >= 1 && product.id <= 12
      );
      setProducts(filterProduct);
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  };

  useEffect(() => {
    handleFetchProducts();
  }, []);

  return (
    <div className="product-list" responsive={responsive}>
      <div className="product-list-container">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
