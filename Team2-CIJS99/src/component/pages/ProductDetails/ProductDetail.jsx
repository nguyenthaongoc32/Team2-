import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = (props) => {
  const { handleAddToCart } = props;
  const [product, setProduct] = useState({});
  const [fetchProductInProgress, setFetchProductInProgress] = useState(false);
  const [fetchProductInError, setFetchProductInError] = useState(null);

  const params = useParams();
  const { id } = params || {};

  const handleFetchProductDetail = async () => {
    setFetchProductInProgress(true);
    setFetchProductInError(null);
    try {
      const apiResponse = await axios.get(
        `https://66fcd0b0c3a184a84d18118c.mockapi.io/api/data/${id}`
      );
      const productData = apiResponse.data;
      setProduct(productData);
    } catch (error) {
      console.log("Something went wrongs:", error);
      setFetchProductInError(error.response.data.message);
    } finally {
      setFetchProductInProgress(false);
    }
  };

  useEffect(() => {
    handleFetchProductDetail();
  }, []);

  const { title, price, categories, description, image = {} } = product;
  const { mainImg, othersImg = [] } = image;

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="row">
        <div className="col">
          <img style={{ width: "100%" }} src={mainImg} alt="mainImg" />
        </div>
        <div
          className="col d-flex flex-column row-gap-3"
          style={{ padding: "2.5rem" }}
        >
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={`/${categories}`}>{categories}</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {id}
              </li>
            </ol>
          </nav>
          <h1>{title}</h1>
          <h5>${price}</h5>
          <div className="d-flex column-gap-3">
            <button
              className="btn"
              style={{ backgroundColor: "#B48D36", fontWeight: "bold" }}
              onClick={() => handleAddToCart(id)}
            >
              ADD TO CART
            </button>
          </div>
          <hr />
          <div style={{ height: "fit-content", overflow: "auto" }}>
            <h5>Description</h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div
        id="carouselExample"
        className="carousel slide"
        style={{ width: "40rem" }}
      >
        <div className="carousel-inner">
          {othersImg.map((othersImgItem, index) => (
            <div className="carousel-item active" key={index + 1}>
              <img
                src={othersImgItem}
                className="d-block w-100"
                alt="oImgItem"
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
