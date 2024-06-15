import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../Home_Components/Header'
import productsData from '../Data_Components/ProductsData'
import './Specifications.css'
import { IoMdStar } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa6'
import reviewsData from '../Data_Components/ReviewsData'
import ReviewsLayout from '../Reviews_components/ReviewsLayout';
import Services from '../Services_Component/Services';
import Footer from '../Footer_Component/Footer';
import ProductLayout from '../Layout_Components/ProductLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';


function Specifications() {


    const { productId } = useParams();

    const prodId = parseInt(productId);

    const product = productsData.find(item => item.id === prodId);

    const { images, title, info, category, finalPrice, originalPrice, ratings, rateCount, brand, type, connectivity } = product;

    const [previmage, setprevimage] = useState(images[0])

    useEffect(() => {
        setprevimage(images[0])

    }, [images])

    const handleprevimage = (i) => {
        setprevimage(images[i])

    }

    const discountprice = originalPrice - finalPrice
    const percentageDiscount = Math.floor(((discountprice / originalPrice) * 100))

    const [activesection, setactivesection] = useState('specifications')

    const handlesection = (section) => {
        setactivesection(section)
    }

    const relatedProducts = productsData.filter(
        item => item.category === category && item.id !== prodId
    );


    return (
        <>
            <Header />
            <div className='product-specification'>
                <div className='imagesplace'>
                    <div className='smallimageslayout'>

                        {images.map((img, i) => (

                            <div key={i} onClick={() => handleprevimage(i)} className='smallimages'> <img src={img} alt='pdimage' /></div>
                        ))}
                    </div>

                    <div className='bigimage'>
                        <img src={previmage} alt="pdtimage" />
                    </div>

                </div>

                <div className='descriptionplace'>

                    <h1>{title}</h1>

                    <p>{info}</p>
                    <div className='starrating'>
                        <span className='specificstars'>
                            {
                                [...Array(rateCount)].map((i) => <IoMdStar key={i} style={{ color: "red", height: 25, width: 25 }} />)
                            }

                        </span>

                        <span className='ratingbar'>|  {ratings} Ratings</span>
                    </div>

                    <div className='specificationswhiteline'></div>

                    {/* {percentageDiscount} */}
                    <div className='pricestock'>

                        <div className='priceandtax'>
                            {/* {discountprice} */}

                            <p>₹{finalPrice} <strike>   ₹{originalPrice}</strike></p>

                            <h1>You Save: ₹{discountprice}  ({percentageDiscount}%)</h1>
                            <pre>(Inclusive of all taxes)</pre>
                        </div>

                        <div className='instock'>
                            <FaCheck /> <span>In stock</span>
                        </div>
                    </div>

                    <div className='specificationswhiteline'></div>
                    <div className='offerspara'>
                        <p >Offers and Discounts</p>
                    </div>
                    <div className='emicashback'>
                        <button>No Cost EMI on Credit Card</button>
                        <button>Pay Later & Avail Cashback</button>
                    </div>
                    <div className='specificationswhiteline'></div>

                    <button className='final-button'>Add to Cart</button>
                </div>

            </div>
            <div className='specoverrev'>
                <ul>
                    <li onClick={() => handlesection('specifications')} className={activesection === 'specifications' ? 'active' : ''} >Specifications</li>
                    <li onClick={() => handlesection('overview')} className={activesection === 'overview' ? 'active' : ''}>Overview</li>
                    <li onClick={() => handlesection('reviews')} className={activesection === 'reviews' ? 'active' : ''}>Reviews</li>
                </ul>
            </div>


            {activesection === 'specifications' && (<div className='specifications'>
                <div className='names'>

                    <ul>
                        <li>Brand</li>
                        <li>Model</li>
                        <li>Generic Name</li>
                        <li>Headphone Type</li>
                        <li>Connectivity</li>
                        <li>Microphone</li>
                    </ul>
                </div>

                <div className='names-info'>
                    <ul>
                        <li>{brand}</li>
                        <li>{title}</li>
                        <li>{category}</li>
                        <li>{type}</li>
                        <li>{connectivity}</li>
                        <li>Yes</li>
                    </ul>
                </div>

            </div>)}


            {activesection === 'overview' && (
                <div className='overview'>

                    <h1>The <span style={{ color: "red" }}>{title}</span> {type} {connectivity} Headphones provides with fabulous sound quality</h1>

                    <ul>
                        <li>Sound Tuned to Perfection</li>
                        <li>Comfortable to Wear</li>
                        <li>Long Hours Playback Time</li>
                    </ul>

                    <p>Buy the {title} {type} {connectivity} Headphones which offers you with fabulous music experience by providing you with awesome sound quality that you can never move on from. Enjoy perfect flexibility and mobility with amazing musical quality with these Headphones giving you a truly awesome audio experience. It blends with exceptional sound quality and a range of smart features for an unrivalled listening experience. </p>
                </div>
            )}


            {activesection === "reviews" && (

                reviewsData.map(item => (
                    <ReviewsLayout key={item.id} {...item} />
                ))
            )}

            <h1 className='relatedproducts'>Related Products</h1>

            <div className='related-products-container'>
                {<div className='related-products'>
                    {relatedProducts.map((relatedProduct) => (
                        <ProductLayout key={relatedProduct.id} {...relatedProduct} path="/product-details/" />
                    ))}
                </div>}

            </div>

            <Services />
            <Footer />




        </>
    )
}

export default Specifications
