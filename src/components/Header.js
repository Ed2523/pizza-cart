import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header>
            <nav >
                <Link to={'/'} className='title'>Pizza</Link>
                <ul className='nav-links'>
                    <li><Link to={'/cart'} ><i className="fas fa-shopping-cart"></i><span>CART</span></Link></li>
                    <li><Link to={'/cart/history'}><i className="fas fa-history"></i><span>HISTORY</span></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
