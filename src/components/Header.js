import React from 'react'
const Header = () => {
    return (
        <header>
            <nav >
                <h1 className='title'>Pizza</h1>
                <ul className='nav-links'>
                    <li> <i className="fas fa-shopping-cart"></i><a href='./' >CART</a></li>

                </ul>
            </nav>
        </header>
    )
}

export default Header
