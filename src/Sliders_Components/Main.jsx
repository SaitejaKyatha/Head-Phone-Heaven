import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import './Main.css'
import sonyXb910n from '../Assets/Images/Products/sonyXb910n-1.png'
import jblLive660NC from '../Assets/Images/Products/jbl660nc-1.png'
import boat1313 from '../Assets/Images/Products/boat131-3.png'


function Main() {

    const productsData = [
        {
            id: 1,
            bgtext: "Over Ear",
            pdname: "JBL Live 660NC",
            image: jblLive660NC,
            tagline: "Keep The Noise Out, Or In. You Choose.",
            descprice: 9999,
            originalPrice: 14999,
        },
        {
            id: 2,
            bgtext: "In Ear",
            pdname: "boAt Airdopes 131",
            image: boat1313,
            tagline: "Featherweight For Comfort All-Day.",
            descprice: 1099,
            originalPrice: 2990,
        },
        {
            id: 3,
            bgtext: "Over Ear",
            pdname: "Sony WH-XB910N",
            image: sonyXb910n,
            tagline: "Give Your Favourite Music A Boost.",
            descprice: 13489,
            originalPrice: 19990,
        }
    ]

    return (
        <>
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
                {productsData.map((item) => (
                    <SwiperSlide key={item.id} className="featured_slides">
                        <h1 className='bgtext'>{item.bgtext}</h1>
                        <h1 className='pdname'>{item.pdname}</h1>
                        <h1 className='tagline'>{item.tagline}</h1>
                      <div className='price'>  <span >₹{item.descprice}</span>  <strike> ₹{item.originalPrice}</strike></div>
                        <button className='btn'>Shop Now</button>
                        <img src={item.image} alt="bomma" className="featured_img" />
                   
                       
                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    )
}

export default Main
