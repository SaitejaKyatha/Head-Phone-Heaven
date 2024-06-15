import React, { useState } from 'react'
import './TopProducts.css'
import productsData from '../Data_Components/ProductsData'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import ProductLayout from '../Layout_Components/ProductLayout'
import { Link } from 'react-router-dom'


function TopProducts() {

  const [products, setproducts] = useState(productsData)
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All')

  const allProducts = () => {
    setFilteredProducts([]);
    setActiveCategory('All');
  };

  const filterByCategory = (category) => {
    const filtered = productsData.filter(product => product.category === category);
    setFilteredProducts(filtered);
    setActiveCategory(category);
  };

  return (
    <>
      <div className='blackheading'><h1>Top Products</h1></div>

      <nav className='tplists'>
        <ul >
          <li onClick={allProducts} className={activeCategory === 'All' ? 'active' : ''}>
            All
          </li>

          <li onClick={() => filterByCategory('Headphones')} className={activeCategory === 'Headphones' ? 'active' : ''}>
            Headphones
          </li>

          <li onClick={() => filterByCategory('Earbuds')} className={activeCategory === 'Earbuds' ? 'active' : ''}>
            Earbuds
          </li>

          <li onClick={() => filterByCategory('Earphones')} className={activeCategory === 'Earphones' ? 'active' : ''}>
            Earphones
          </li>

          <li onClick={() => filterByCategory('Neckbands')} className={activeCategory === 'Neckbands' ? 'active' : ''}>
            Neckbands
          </li>
        </ul>
      </nav>

      <div className='interface'>
        {(filteredProducts.length > 0 ? filteredProducts : products).slice(0, 11).map(item => (
          <ProductLayout key={item.id} {...item} />
        ))}

        <div className='browsealllayoutcard'>
          <Link to="/all-products"><p>Browse All Products <span><FontAwesomeIcon icon={faArrowRight} /></span></p></Link>
        </div>
      </div>
    </>
  )
}

export default TopProducts

