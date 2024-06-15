import React from 'react'
import './ProductLayout.css'
import { IoMdStar } from 'react-icons/io';
import { Link } from 'react-router-dom'

function ProductLayout(props) {

  const { images, title, info, finalPrice, originalPrice, rateCount, id, path } = props;

  return (
    <>
      <div className='layoutcards'>
        <div className='imageback'>
         <Link to={`${path}${id}`}>
         <img src={images[0]} alt="imagesss" className='product-image' /></Link>
        </div>
        <div className='product-details'>
          <span className='stars'>
            {
              [...Array(rateCount)].map((i) => <IoMdStar key={i} style={{color:"red"}} />)
            }
          </span>
          <h3 className='product-title'>{title}</h3>
          <p className='product-desc'>{info}</p>
          <div className='line'></div>
          <h1 className='product-price'>
            ₹{finalPrice} <strike> ₹{originalPrice}</strike>
          </h1>
          <button type='submit' className='productbtn'>Add to cart</button>
        </div>

      </div>
    </>
  )
}

export default ProductLayout
