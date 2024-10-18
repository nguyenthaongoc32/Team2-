import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../Banner/Banner.css';
import { Link , useNavigate} from 'react-router-dom';
function Baner() {
  return (
    <div style={{marginTop:"1px"}}>
       <Carousel data-bs-theme="dark" >
      <Carousel.Item>
        <img
          className="carousel-img "
          src="/img/lol.jpg"
          alt="LOL"
        />
        <Carousel.Caption>
          <button className='caption-button'>
            <Link className='caption-button-link' to='/League of Legends'>Shop Now</Link>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img"
          src="/img/teamfight.jpg"
          alt="Teamfight "
        />
        <Carousel.Caption>
          <button className='caption-button'>
            <Link className='caption-button-link' to='/Teamfight Tactics"' >Shop Now</Link>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img"
          src="/img/valorant.jpg"
          alt="valorant"
        />
        <Carousel.Caption>
          <button className='caption-button'>
            <Link className='caption-button-link' to='/valorant' >Shop Now</Link>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Baner
