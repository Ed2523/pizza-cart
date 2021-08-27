import React, { useState } from 'react'
import pizzasData from '../data/pizzas'

const HomeScreen = ({ qtyMeat, qtyVeggie, setQtyMeat, setQtyVeggie, pizzasInCart, setPizzasInCart, qtyTotal, setQtyTotal }) => {


    const pizzas = pizzasData


    const addPizza = (e) => {
        if (e.target.alt === 'meat pizza') {
            setQtyMeat(qtyMeat + 1)
            setQtyTotal(1 + qtyMeat + qtyVeggie)
            qtyMeat === 0 ?
                setPizzasInCart([...pizzasInCart, {
                    id: pizzas[0].id,
                    name: pizzas[0].name,
                    image: pizzas[0].image,
                    description: pizzas[0].description,
                    price: pizzas[0].price,
                    qty: 1
                }])
                :
                pizzasInCart.map(x => x.id === 1 ? x.qty = qtyMeat + 1 : console.log('qty updated'))

        } else if (e.target.alt === 'veggie pizza') {
            setQtyVeggie(qtyVeggie + 1)
            setQtyTotal(1 + qtyMeat + qtyVeggie)

            qtyVeggie === 0 ?
                setPizzasInCart([...pizzasInCart, {
                    id: pizzas[1].id,
                    name: pizzas[1].name,
                    image: pizzas[1].image,
                    description: pizzas[1].description,
                    price: pizzas[1].price,
                    qty: 1
                }])
                :
                pizzasInCart.map(x => x.id === 2 ? x.qty = qtyVeggie + 1 : console.log('qty updated'))
        }
    }
    console.log(pizzasInCart)
    return (
        <div className='home-screen'>
            <div className="pizza-options">

                <div className='pizza' >
                    <h1 className='meat'>Meat lovers</h1>

                    <img src={'/images/meat.png'} alt="meat pizza" onClick={addPizza} />
                    <div className="qty">
                        <h1>Qty:</h1>
                        <span>{qtyMeat}</span>
                    </div>

                </div>

                <div className='pizza' onClick={addPizza}>
                    <h1 className='veggie'>Veggie</h1>

                    <img src={'/images/veggie.png'} alt="veggie pizza" />
                    <div className="qty">
                        <h1>Qty:</h1>
                        <span>{qtyVeggie}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeScreen
