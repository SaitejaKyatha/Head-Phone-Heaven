import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import './ProductLayout.css'

function ProductLayout(item) {

  const { id, images, title, info, finalPrice, originalPrice, rateCount, path } = item;

  return (
    <>
      <div className='layoutcards'>


        <img src={images[0]} alt="imagesss" className='product-image' />

        <div className='product-details'>
          <span className='stars'>
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
          </span>
          <h3 className='product-titlr'>{title}</h3>
          <h5 className='product-desc'>{info}</h5>
          <div className='line'></div>
          <h2 className='product-price'>
            {finalPrice} <strike>{originalPrice}</strike>
          </h2>
          <button type='submit '></button>

        </div>

      </div>

    </>
  )
}

export default ProductLayout
