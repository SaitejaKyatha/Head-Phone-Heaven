import React from 'react'
import './Services.css'
import servicesData from '../Data_Components/ServicesData'

function Services() {
    return (
        <>
            <div className='service-size'>

                <h1 className='serviceheading'>Our Advantages</h1>

            </div>

            <div className='servicemattericon'>
                {servicesData.map((item) => {
                    const { id, icon, title, info } = item;

                    return (


                        <>
                            <div className='servicematter'>
                                <div className='service-icon'>{icon}</div>
                                <div>
                                    <h4 className='service-icon-heading'>{title}</h4>
                                    <p className='service-icon-para'>{info}</p>
                                </div>
                            </div>
                        </>

                    )
                })}
            </div>

        </>
    )
}

export default Services
