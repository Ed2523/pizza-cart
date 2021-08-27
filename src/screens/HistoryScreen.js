import React from 'react'
import '../styles/App.css'
import Order from '../components/Order'


const HistoryScreen = ({ orders, setOrders }) => {
    console.log(orders)
    return (
        <div className='history-screen'>
            {orders.length >= 1 ?
                orders.map(order => <Order key={order.id} meatNum={order.meatQty} veggieNum={order.veggieQty} id={order.id} />)
                :
                <h1 >NO ORDER HISTORY</h1>
            }
        </div>
    )
}

export default HistoryScreen
