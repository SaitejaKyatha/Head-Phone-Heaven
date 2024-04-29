import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
// import {faFacebookF} from 'react-icons/fa';
function Footer() {
    return (
        <>

            <div className='footer-section'>

                {/* <h1 style={{ color: "white" }}>this is footer page</h1> */}

                <div className='firstdivision'>
                    <h1>
                        Tech-shop
                    </h1>
                    <p className='divisionpara'>
                        Subscribe to our Email alerts to receive early discount offers, and now products info.
                    </p>

                    <input type="text" placeholder='Email Address*' />

                    <br />

                    <button>Subscribe</button>
                </div>

                <div className='seconddivision'>
                    <h1>Help</h1>

                    <li>FAQs</li>
                    <li>Track Order</li>
                    <li>Cancel Order</li>
                    <li>Return Order</li>
                    <li>Warranty info</li>
                </div>

                <div className='thirddivision'>
                    <h1>Policies</h1>

                    <li>Return Policy</li>
                    <li>Security</li>
                    <li>Sitemap</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </div>

                <div className='fourthdivision'>
                    <h1>Company</h1>

                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Service Centers</li>
                    <li>Careers</li>
                    <li>Affiliates</li>
                </div>
            </div>


            <div className='bigline'></div>

            <div className='bottomdetails'>
                <p>2023 | All Rights Reserved, Built by | SAI TEJA KYATHA</p>

                <div className='footericons'>
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faTwitter} />


                    <FontAwesomeIcon icon={faInstagram} />


                    <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
            </div>


        </>
    )
}

export default Footer
