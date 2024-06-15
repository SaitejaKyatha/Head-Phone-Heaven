import React from 'react'
import './ReviewsLayout.css'
import { IoMdStar } from 'react-icons/io';

function ReviewsLayout(props) {

    const { name, ratecount, date, review } = props

    return (
        <>

            <div className='reviews'>
                <div className='logonamestar'>
                    <img src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png" alt="logoiage" className='logoimage' />
                    <div className='reviewnames'>
                        <h1>{name}</h1>
                        <span className="rating_star">
                            {
                                [...Array(ratecount)].map((i) => <IoMdStar key={i} />)
                            }
                        </span>
                        <span className='bar'> |</span>
                        <span className='date'>  {date}</span>
                    </div>

                </div>
                <p className='parareview'>{review}</p>

            </div>

        </>
    )
}

export default ReviewsLayout
