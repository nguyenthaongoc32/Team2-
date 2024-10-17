import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../ProductList/ProductList.css";
import { Link } from "react-router-dom";
const ProductCard = (props) => {
  const { product, handleAddToCart } = props;
  const { id, title, price, image = {} } = product;
  const { mainImg, othersImg = [] } = image;
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="product-card">
      <Link to={`/products/${id}`}>
        <div className="main-image-slider">
          <Slider {...sliderSettings}>
            <div>
              <img src={mainImg} alt={title} className="main-image" />
            </div>

            {othersImg.map((othersImgItem, index) => (
              <div key={index}>
                <img
                  src={othersImgItem}
                  alt={`Other image ${index + 1}`}
                  className="main-image"
                />
              </div>
            ))}
          </Slider>
        </div>
      </Link>
      <h4>{title}</h4>
      <p>${price}</p>

      <button className="product-cart" onClick={() => handleAddToCart(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="21"
          fill="#fff"
          role="presentation"
        >
          <path d="M1.555.168a1 1 0 0 0-1.11 1.664L4.73 4.688 7.204 15.58a1 1 0 0 0 .976.778h10.256a1 1 0 0 0 .96-.718l2.563-8.718A1 1 0 0 0 21 5.641h-9.743a1 1 0 1 0 0 2h8.406l-.769 2.615h-7.637a1 1 0 0 0 0 2h7.05l-.62 2.103h-8.71L6.592 3.855a1 1 0 0 0-.42-.61L1.554.168ZM8.949 21a1.795 1.795 0 1 0 0-3.59 1.795 1.795 0 0 0 0 3.59ZM17.667 21a1.795 1.795 0 1 0 0-3.59 1.795 1.795 0 0 0 0 3.59Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default ProductCard;
