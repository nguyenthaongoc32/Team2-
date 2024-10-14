import React from 'react'
import { Link } from 'react-router-dom'
import '../Header/Header.css'
const Header = () => {
    return (
        <div className='sticky-top'>
            <div className='sticky-top bg-dark d-flex justify-content-between '>
                <div className='logo_container'>
                    <Link class="navbar-brand" href="#">
                        <img src='public/img/logo.png' alt='logo' style={{ width: '30%' }} />
                    </Link>
                </div>
                <ul style={{ width: "400px" }} className='d-flex justify-content-between '>
                    <li style={{ marginLeft: "10px" }} className="mt-1 p-2">
                        <Link className="text-decoration-none text-light" href='/Home'>SHOP ALL</Link></li>
                    <li className="nav-item dropdown mt-1 p-2">
                        <Link className="nav-link dropdown-toggle text-decoration-none text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            CATEGORIES
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" href="#">League of Legends</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" href="#">VALORANT</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" href="#">Teamfight Tactics</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" href="#">Arcane</Link></li>
                        </ul>
                    </li>
                </ul>
                <form className="d-flex " role="search">
                    <input className="inp-src form-control me-5 mt-3 p-6" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn-src btn btn-outline-success  me-5 mt-3 p-6" type="submit">Search</button>
                </form>
                <div className="riotbar-account-container">
                    <div className="riotbar-account-link-wrapper">
                        <Link className=" riotbar-account-action " >
                            Sign In
                        </Link>
                    </div>
                </div>
                <div className='riotbar-nav-cart-plugin'>
                    <div className="riotbar-nav-cart">
                        <div className="cart-button" role="button">
                            <div className="cart-button_cart-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" fill="#fff" role="presentation">
                                    <path d="M1.555.168a1 1 0 0 0-1.11 1.664L4.73 4.688 7.204 15.58a1 1 0 0 0 .976.778h10.256a1 1 0 0 0 .96-.718l2.563-8.718A1 1 0 0 0 21 5.641h-9.743a1 1 0 1 0 0 2h8.406l-.769 2.615h-7.637a1 1 0 0 0 0 2h7.05l-.62 2.103h-8.71L6.592 3.855a1 1 0 0 0-.42-.61L1.554.168ZM8.949 21a1.795 1.795 0 1 0 0-3.59 1.795 1.795 0 0 0 0 3.59ZM17.667 21a1.795 1.795 0 1 0 0-3.59 1.795 1.795 0 0 0 0 3.59Z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
