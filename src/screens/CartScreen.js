import React, { useState } from 'react'
import CartItem from '../components/CartItem'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

const CartScreen = ({ orders, setOrders, setQtyMeat, setQtyVeggie, pizzasInCart, setPizzasInCart, qtyTotal, setQtyTotal }) => {



    const meatPizzas = pizzasInCart.length > 0 ? pizzasInCart.find(x => x.id === 1) : null
    const veggiePizzas = pizzasInCart.length > 0 ? pizzasInCart.find(x => x.id === 2) : null



    const sendData = async () => {

        const res = await axios.post('/api/pizzas/orders', {
            order: pizzasInCart,
        })

    }


    const checkOut = () => {
        pizzasInCart.length > 0 ?
            setOrders([...orders, {
                id: uuidv4(),
                meatQty: meatPizzas ? meatPizzas.qty : 0,
                veggieQty: veggiePizzas ? veggiePizzas.qty : 0,
            }])
            :
            console.log('No new Orders')

        setPizzasInCart([])
        setQtyTotal(0)
        setQtyVeggie(0)
        setQtyMeat(0)
        // sendData()

    }

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
                    <button onClick={checkOut}>CheckOut</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
