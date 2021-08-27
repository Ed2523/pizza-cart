import React from 'react'
import CartItem from '../components/CartItem'
import pizzas from '../data/pizzas'

const CartScreen = ({ qtyMeat, qtyVeggie, setQtyMeat, setQtyVeggie, pizzasInCart, setPizzasInCart, qtyTotal, setQtyTotal }) => {


    return (
        <div className='cart-section'>
            <div className="cart-items">

                {pizzasInCart.map(pizzaItem => <CartItem
                    key={pizzaItem.id}
                    name={pizzaItem.name}
                    image={pizzaItem.image}
                    description={pizzaItem.description}
                    price={pizzaItem.price}
                    qtyPerItem={pizzaItem.qty}
                    qtyTotal={qtyTotal}
                    setQtyTotal={setQtyTotal}
                />)}


            </div>
            <div className="cart-checkout">
                <div className="total">

                    <h1>Total</h1>
                    <span>{
                        qtyTotal
                    }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
