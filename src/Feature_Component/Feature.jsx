// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, EffectCoverflow, A11y } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/swiper-bundle.css';
// import './Feature.css'
// import boat255r from '../Assets/Images/Products/boat255r-1.png'
// import jblendu from '../Assets/Images/Products/jbl-endu-1.png'
// import boat203 from '../Assets/Images/Products/boat203-1.png'
// import boat518 from '../Assets/Images/Products/boat518-1.png'
// import jbl760nc from '../Assets/Images/Products/jbl760nc-1.png'

// function Feature() {

//     const productsData = [
//         {
//             id: 1,
//             name: 'boAt Rockerz 255',
//             image: boat255r,
//             price: 899,
//             originalPrice: 2990,
//         },
//         {
//             id: 2,
//             name: 'JBL Endurance Run Sports',
//             image: jblendu,
//             price: 999,
//             originalPrice: 1599,
//         },
//         {
//             id: 3,
//             name: 'boAt Airdopes 203',
//             image: boat203,
//             price: 1074,
//             originalPrice: 3999,
//         },
//         {
//             id: 4,
//             name: 'boAt Rockerz 518',
//             image: boat518,
//             price: 1299,
//             originalPrice: 3990,
//         },
//         {
//             id: 5,
//             name: 'JBL Tune 760NC',
//             image: jbl760nc,
//             price: 5999,
//             originalPrice: 7999,
//         },
//         // {
//         //     id: 2,
//         //     name: 'JBL Endurance Run Sports',
//         //     image: jblendu,
//         //     price: 999,
//         //     originalPrice: 1599,
//         // },
//     ]

//     return (
//         <>
//             <div className='blackheading'><h1>Features Products</h1></div>
//             <Swiper
//                 modules={[Pagination, Autoplay, A11y, EffectCoverflow]}
//                 slidesPerView={5}
//                 spaceBetween={0}
//                 speed={400}
//                 pagination={{ clickable: true }}
//                 effect={"coverflow"}
//                 centeredSlides={true}
//                 loop={true}
//                 autoplay={{ delay: 2000, disableOnInteraction: false }}
//                 style={{ height: 700}}
//                 coverflowEffect={{
//                     rotate: 0,
//                     stretch: 0,
//                     depth: 70,
//                     modifier: 6,
//                     slideShadows: true,
//                 }}
//                 className="featured_swiper"
//             >
//                 {productsData.map((item) => (
//                     <SwiperSlide key={item.id} className="featured_slides" style={{ textAlign: "center" }}>
//                         <p className="featured_title">{item.name}</p>
//                         <img src={item.image} alt={item.name} className='fimage' />
//                         <h2 className="products_price">
//                             ₹{item.price} <small><del>₹{item.originalPrice}</del></small>
//                         </h2>
//                     </SwiperSlide>
//                 ))}

//             </Swiper>
//         </>
//     )
// }

// export default Feature




import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import './Feature.css'
import boat255r from '../Assets/Images/Products/boat255r-1.png'
import jblendu from '../Assets/Images/Products/jbl-endu-1.png'
import boat203 from '../Assets/Images/Products/boat203-1.png'
import boat518 from '../Assets/Images/Products/boat518-1.png'
import jbl760nc from '../Assets/Images/Products/jbl760nc-1.png'

function Feature() {
  const productsData = [
    {
      id: 1,
      name: 'boAt Rockerz 255',
      image: boat255r,
      price: 899,
      originalPrice: 2990,
    },
    {
      id: 2,
      name: 'JBL Endurance Run Sports',
      image: jblendu,
      price: 999,
      originalPrice: 1599,
    },
    {
      id: 3,
      name: 'boAt Airdopes 203',
      image: boat203,
      price: 1074,
      originalPrice: 3999,
    },
    {
      id: 4,
      name: 'boAt Rockerz 518',
      image: boat518,
      price: 1299,
      originalPrice: 3990,
    },
    {
      id: 5,
      name: 'JBL Tune 760NC',
      image: jbl760nc,
      price: 5999,
      originalPrice: 7999,
    },
    {
        id: 5,
        name: 'JBL Tune 760NC',
        image: jbl760nc,
        price: 5999,
        originalPrice: 7999,
      },
  ]

  return (
    <>
      <div className='blackheading'><h1>Features Products</h1></div>
      <Swiper
        modules={[Pagination, Autoplay, A11y, EffectCoverflow]}
        slidesPerView={3.5}
        spaceBetween={0}
        speed={400}
        pagination={{ clickable: true }}
        effect={"coverflow"}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        style={{ height: 700}}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 20,
          modifier: 10,
          slideShadows: false,
        }}
        className="featuredswiper"
      >
        {productsData.map((item) => (
          <SwiperSlide
            key={item.id}
            className={(isActive) =>
              isActive ? 'featured_slides swiper-slide-active' : 'featured_slides'
            }
            style={{ textAlign: "center" }}
          >
            <p className="featured_title">{item.name}</p>
            <img src={item.image} alt={item.name} className='fimage' />
            <h2 className="products_price">
              ₹{item.price} <small><del>₹{item.originalPrice}</del></small>
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Feature