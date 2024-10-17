import React from "react";
import ProductCard from "../../Home/ProductCard/ProductCard";

const SearchPage = (props) => {
  const { handleAddToCart, productsFilter } = props;
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

  return (
    <div className="product-list" responsive={responsive}>
      <div className="product-list-container">
        {productsFilter.length > 0 ? (
          productsFilter.map((product) => (
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

export default SearchPage;
