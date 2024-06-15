import React, { useState, useEffect, useRef, useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import './Header.css'
import productsData from '../Data_Components/ProductsData'
// import commonContext from '../Hooks_Component/CommonContext'
// import Form from './Form'

function Header() {
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    // const { isFormOpen, toggleForm } = useContext(commonContext);
    const inputRef = useRef(null);
    const userRef = useRef(null);
    const dropdownRef = useRef(null);

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    };

    const closeSearch = () => {
        setSearchVisible(false);
    };

    const handleClickOutside = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            closeSearch();
        }
        if (
            userRef.current && !userRef.current.contains(event.target) &&
            dropdownRef.current && !dropdownRef.current.contains(event.target)
        ) {
            setDropdownVisible(false);
        }
    };

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        const filtered = productsData.filter(product => product.title.toLowerCase().includes(query));
        setFilteredProducts(filtered);
    };

    // useEffect(() => {
    //     if (searchVisible) {
    //         document.addEventListener('mousedown', handleClickOutside);
    //     } else {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     }

    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, [searchVisible, dropdownVisible]);
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    return (
        <nav className='fixed'>

            <ul className='header'>
                <li>
                    <Link to="/">Tech-Shop</Link>
                </li>

                <li onClick={toggleSearch} className='idea'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <button className="hidden-btn">Search</button>
                </li>

                <li>
                    <Link to="/cart"> <FontAwesomeIcon icon={faCartShopping} /></Link>
                    <button className="hidden-btn">View Cart</button>

                </li>

                {/* <li ref={userRef}
                    onMouseEnter={() => setDropdownVisible(true)}
                > */}
                <li
                    ref={userRef}
                    onMouseEnter={() => setDropdownVisible(true)}
                    onMouseLeave={(event) => {
                        if (
                            dropdownRef.current &&
                            !dropdownRef.current.contains(event.relatedTarget)
                        ) {
                            setDropdownVisible(false);
                        }
                    }}
                >
                    {/* <FontAwesomeIcon icon={faUser} />
                    {dropdownVisible && (
                        <div className="user-dropdown"> */}
                    <FontAwesomeIcon icon={faUser} />
                    {dropdownVisible && (
                        <div
                            className="user-dropdown"
                            ref={dropdownRef}
                            onMouseEnter={() => setDropdownVisible(true)}
                            onMouseLeave={(event) => {
                                if (
                                    userRef.current &&
                                    event.relatedTarget &&
                                    !userRef.current.contains(event.relatedTarget)
                                ) {
                                    setDropdownVisible(false);
                                }
                            }}
                        >
                            <p>Hello!</p>
                            <p className='desppara'>Access account and manage orders</p>
                            <button className='formbutton' type='button'>Login / Signup</button>
                            <div className='line'></div>
                            <ul>
                                <li><Link to="/order-details">Orders</Link></li>
                                <li ><Link to="/wishlist" className='batt'>Wishlist</Link></li>
                                <li><Link to="/giftcards">Gift Cards</Link></li>
                                <li><Link to="/saved-cards">Saved Cards</Link></li>
                                <li><Link to="/saved-address">Saved Address</Link></li>
                            </ul>
                        </div>
                    )}
                </li>
            </ul>

            {searchVisible && (
                <div className="overlay">
                    <div className="input_box" ref={inputRef}>
                        <input type="text" className="input_field" placeholder="Search for product..." autoFocus value={searchQuery}
                            onChange={handleSearch} />
                        {filteredProducts.length > 0 && (
                            <ul className="search-results">
                                {filteredProducts.map((product) => (
                                    <li key={product.id}> <Link to={`/product-details/${product.id}`} onClick={closeSearch}>{product.title}</Link></li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            )}

            {/* <Form/> */}

        </nav >
    )
}

export default Header
