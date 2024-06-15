import React, { useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import './Main.css'
import Header from '../Home_Components/Header';
import productsData from '../Data_Components/ProductsData';



function Main() {

    const [showsearchinput, setshowsearchinput] = useState(false);
    const inputref = useRef(null);
    const [searchquery, setsearchquery] = useState('')

    const searchbar = () => {
        setshowsearchinput(!showsearchinput)

    }

    const clickinhide = (event) => {
        if (inputref.current && !inputref.current.contains(event.target)) {
            setshowsearchinput(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', clickinhide);
        return () => {
            document.removeEventListener('mousedown', clickinhide)
        }

    }, [])

    const handleserachchange = (event) => {
        if (event.target && event.taret.value !== undefined) {
            setsearchquery(event.taret.value);
        }
    }

    const filteredproducts = productsData.filter((product) =>
        product.title.toLowerCase().includes(searchquery.toLowerCase())
    );

    return (
        <>

            <Header searchbar={searchbar} />
            {/* {showsearchinput && (
                <div className='inputbox' ref={inputref}>
                    <input type="text" placeholder='Search for product' className='inputbar' value={searchquery} onChange={handleserachchange} />
                </div>
            )} */}

            <Swiper

                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                {filteredproducts.filter((item) => item.tag === 'hero-product').map((item) => (
                    <SwiperSlide key={item.id} className="featured_slides">
                        <h1 className='bgtext'>{item.type}</h1>
                        <h1 className='pdname'>{item.title}</h1>
                        <h1 className='tagline'>{item.tagline}</h1>
                        <div className='price'>  <span >₹{item.finalPrice}</span>  <strike> ₹{item.originalPrice}</strike></div>
                        <button className='btn'>Shop Now</button>
                        <img src={item.heroImage} alt="bomma" className="featured_img" />


                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    )
}

export default Main
