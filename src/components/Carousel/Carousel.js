import React from 'react'
/* import SwiperCore, { Swiper, SwiperSlide, Pagination, Navigation } from 'swiper';
 */


import styles from './carousel.css'

export default function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide carousel carousel-section" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner carousel-display">
        <div className="carousel-item carousel-item1 active">
          <div className="carousel-item1__content">
            <p>Buy 2 Get <span><i className="far fa-star"></i>1 free<i className="far fa-star"></i></span></p>
            <h1>Fashionable<br /><span>Collection</span></h1>
            <a href="">Shop now</a>
          </div>
        </div>
        <div className="carousel-item carousel-item2">
          <div className="carousel-item1__content">
            <h1>Enticing<br /><span>Discounts</span></h1>
            <p>Up to 50% off all order this Season</p>
            <a href="">Shop now</a>
          </div>
            
        </div>
        <div className="carousel-item carousel-item3">
          <div className="carousel-item1__content">
            <h1>Mega Super<br /><span>Flash Sales</span></h1>
            <p>Deals you don't want to miss..</p>
            <a href="">Shop now</a>
          </div>
          
        </div>
      </div>
      
  </div>
  )
}
  