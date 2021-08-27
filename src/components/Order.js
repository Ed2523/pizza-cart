import React from 'react'

const Order = ({ orders, id, meatNum, veggieNum }) => {

    return (
        <div className='order'>
            <div className="order-items">

                <div className='order-item'>

                    <h1>Id: {id.substring(0, 7)}</h1>
                    <h1>Num of meat pizzas: {meatNum} </h1>

                    <h1>Num of veggie pizzas: {veggieNum}</h1>
                </div>


            </div>
        </div>
    )
}

export default Order
