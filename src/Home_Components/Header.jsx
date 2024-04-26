import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <nav className='fixed'>

            <ul className='header'>
                <li>
                    <Link to="/">Tech-Shop</Link>
                </li>

                <li>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </li>

                <li>
                    <Link to="/cart"> <FontAwesomeIcon icon={faCartShopping} /></Link>
                </li>

                <li>
                    <FontAwesomeIcon icon={faUser} />
                </li>
            </ul>
        </nav >
    )
}

export default Header
