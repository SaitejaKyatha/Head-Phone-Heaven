import React from 'react'
import Header from '../Home_Components/Header'
import './AllProducts.css'
import ProductLayout from '../Layout_Components/ProductLayout'
import productsData from '../Data_Components/ProductsData'
import Services from '../Services_Component/Services'
import Footer from '../Footer_Component/Footer'

function AllProducts() {
    return (
        <>
            <Header />

            <div className='productsdivider'>
                <div className='scroller'>
                    <h2>Sort By</h2>
                    <div className='whiteline'></div>
                    <li>Latest</li>
                    <li>Featured</li>
                    <li>Top Rated</li>
                    <li>Price(Lowest First)</li>
                    <li>Price(Highest First)</li>

                    <h2>Filter By</h2>
                    <div className='whiteline'></div>

                    <h3>Brands</h3>

                    <div className='display'>
                        <input type="checkbox" id='JBL' name='JBL' value={'JBL'} />
                        <label htmlFor="JBL" >JBL</label><br />
                        <input type="checkbox" id='BoAt' name='BoAt' value={'BoAt'} />
                        <label htmlFor="BoAt" >BoAt</label><br />
                        <input type="checkbox" id='Sony' name='Sony' value={'Sony'} />
                        <label htmlFor="Sony" >Sony</label><br />
                    </div>

                    <h3>Category</h3>

                    <div className='display'>
                        <input type="checkbox" id='Headphones' name='Headphones' value={'Headphones'} />
                        <label htmlFor="Headphones" >Headphones</label><br />
                        <input type="checkbox" id='Earbuds' name='Earbuds' value={'Earbuds'} />
                        <label htmlFor="Earbuds" >Earbuds</label><br />
                        <input type="checkbox" id='Earphones' name='Earphones' value={'Earphones'} />
                        <label htmlFor="Earphones" >Earphones</label><br />
                        <input type="checkbox" id='Neckbands' name='Neckbands' value={'Neckbands'} />
                        <label htmlFor="Neckbands" >Neckbands</label><br />
                    </div>

                    <h3>Price</h3>
                    <p className='scrollp'>85274</p>
                    <div className='display'>
                        <label htmlFor="number"></label>
                        <input type="range" />
                    </div>
                    {/* min={minprice} max={maxprice} */}

                </div>

                <div className='productsinfo'>
                    {/* <h1>products</h1> */}
                    {productsData.map(item => (
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
