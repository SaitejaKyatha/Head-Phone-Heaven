import React, { useState, useMemo, useEffect } from 'react'
import Header from '../Home_Components/Header'
import './AllProducts.css'
import ProductLayout from '../Layout_Components/ProductLayout'
import productsData from '../Data_Components/ProductsData'
import Services from '../Services_Component/Services'
import Footer from '../Footer_Component/Footer'

function AllProducts() {
  const [sortOption, setSortOption] = useState('')
  const [brandFilter, setBrandFilter] = useState([])
  const [categoryFilter, setCategoryFilter] = useState([])
  const [priceRange, setPriceRange] = useState([0, 20000])
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const handleSortChange = (option) => {
    setSortOption(option)
  }

  const handleBrandFilter = (event) => {
    const brand = event.target.value
    if (event.target.checked) {
      setBrandFilter([...brandFilter, brand])
    } else {
      setBrandFilter(brandFilter.filter(item => item !== brand))
    }
  }

  const handleCategoryFilter = (event) => {
    const category = event.target.value
    if (event.target.checked) {
      setCategoryFilter([...categoryFilter, category])
    } else {
      setCategoryFilter(categoryFilter.filter(item => item !== category))
    }
  }

  const handlePriceRangeChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setPriceRange([0, value]);
  };

  const clearFilters = () => {
    setSortOption('');
    setBrandFilter([]);
    setCategoryFilter([]);
    setPriceRange([0, 20000]);
  };

  useEffect(() => {
    const isAnyFilterApplied =
      sortOption !== '' ||
      brandFilter.length > 0 ||
      categoryFilter.length > 0 ||
      priceRange[1] !== 20000;

    setIsFilterApplied(isAnyFilterApplied);
  }, [sortOption, brandFilter, categoryFilter, priceRange]);



  const filteredData = useMemo(() => {
    let filtered = [...productsData]

    if (brandFilter.length > 0) {
      filtered = filtered.filter(item =>
        brandFilter.includes(item.brand)
      )
    }

    if (categoryFilter.length > 0) {
      filtered = filtered.filter(item =>
        categoryFilter.includes(item.category)
      )
    }

    filtered = filtered.filter(item => {
      const price = parseInt(item.finalPrice);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    if (sortOption === 'Latest') {
      filtered = filtered.slice(0, 6)
    } else if (sortOption === 'Featured') {
      filtered = filtered.filter(item => item.tag === "featured-product")
    } else if (sortOption === 'Top Rated') {
      filtered = filtered.filter(item => item.rateCount === 5);
    } else if (sortOption === 'Price(Lowest First)') {
      filtered.sort((a, b) => parseInt(a.finalPrice) - parseInt(b.finalPrice));
    } else if (sortOption === 'Price(Highest First)') {
      filtered.sort((a, b) => parseInt(b.finalPrice) - parseInt(a.finalPrice));
    }

    return filtered
  }, [sortOption, brandFilter, categoryFilter, productsData, priceRange])


  return (
    <>
      <Header />

      <div className='productsdivider'>
        <div className='scroller'>

          {isFilterApplied && (
            <button onClick={clearFilters} className="clear-filter-button">
              Clear Filters
            </button>
          )}

          <h2>Sort By</h2>
          <div className='whiteline'></div>
          <li onClick={() => handleSortChange('Latest')}  className={sortOption === 'Latest' ? 'active' : ''}>Latest</li>
          <li onClick={() => handleSortChange('Featured')}  className={sortOption === 'Featured' ? 'active' : ''}>Featured</li>
          <li onClick={() => handleSortChange('Top Rated')}  className={sortOption === 'Top Rated' ? 'active' : ''}>Top Rated</li>
          <li onClick={() => handleSortChange('Price(Lowest First)')}  className={sortOption === 'Price(Lowest First)' ? 'active' : ''}>Price(Lowest First)</li>
          <li onClick={() => handleSortChange('Price(Highest First)')}  className={sortOption === 'Price(Highest First)' ? 'active' : ''}>Price(Highest First)</li>

          <h2>Filter By</h2>
          <div className='whiteline'></div>

          <h3>Brands</h3>

          <div className='display'>
            <input type="checkbox" id='JBL' name='JBL' value={'JBL'} onChange={handleBrandFilter} />
            <label htmlFor="JBL" >JBL</label><br />
            <input type="checkbox" id='boAt' name='boAt' value={'boAt'} onChange={handleBrandFilter} />
            <label htmlFor="boAt" >BoAt</label><br />
            <input type="checkbox" id='Sony' name='Sony' value={'Sony'} onChange={handleBrandFilter} />
            <label htmlFor="Sony" >Sony</label><br />
          </div>

          <h3>Category</h3>

          <div className='display'>
            <input type="checkbox" id='Headphones' name='Headphones' value={'Headphones'} onChange={handleCategoryFilter} />
            <label htmlFor="Headphones" >Headphones</label><br />
            <input type="checkbox" id='Earbuds' name='Earbuds' value={'Earbuds'} onChange={handleCategoryFilter} />
            <label htmlFor="Earbuds" >Earbuds</label><br />
            <input type="checkbox" id='Earphones' name='Earphones' value={'Earphones'} onChange={handleCategoryFilter} />
            <label htmlFor="Earphones" >Earphones</label><br />
            <input type="checkbox" id='Neckbands' name='Neckbands' value={'Neckbands'} onChange={handleCategoryFilter} />
            <label htmlFor="Neckbands" >Neckbands</label><br />
          </div>

          <h3>Price</h3>
          <p className='scrollp'>₹{priceRange[1]}</p>
          <div className='display'>
            <label htmlFor="number"></label>
            <input type="range" min="0" max="20000" value={priceRange[1]} onChange={handlePriceRangeChange} />
          </div>
          {/* min={minprice} max={maxprice} */}

        </div>

        <div className='productsinfo'>
          {/* <h1>products</h1> */}
          {filteredData.map(item => (
            <ProductLayout key={item.id} {...item} />
          ))}
        </div>


      </div>

      <Services />
      <Footer />

    </>
  )
}

export default AllProducts
