import React, { useState } from 'react'

const CartItem = ({ name, image, description, price, qtyPerItem, qtyTotal, setQtyTotal }) => {
    const [itemQty, setItemQty] = useState(qtyPerItem)

    const addItem = () => {
        setItemQty(itemQty + 1)
        setQtyTotal(qtyTotal + 1)
    }
    const takeItem = () => {
        setItemQty(itemQty - 1)
        setQtyTotal(qtyTotal - 1)
    }

    return (
        <div className='cart-item'>
            <div className="image-container">
                <img src={image} alt="" />
            </div>
            <div className="item-details">
                <h1></h1>
                <p className="description">{description}</p>
                <div className="qty">
                    <button onClick={takeItem}>-</button>
                    <span>{itemQty}</span>
                    <button onClick={addItem}>+</button>
                </div>

            </div>
        </div>
    )
}

export default CartItem
