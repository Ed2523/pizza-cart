import React, { useState, useEffect } from 'react'
import './styles/App.css';
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import HistoryScreen from './screens/HistoryScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'



function App() {
  const [qtyMeat, setQtyMeat] = useState(0);
  const [qtyVeggie, setQtyVeggie] = useState(0);
  const [qtyTotal, setQtyTotal] = useState(0)
  const [pizzasInCart, setPizzasInCart] = useState([])
  const [orders, setOrders] = useState([])


  return (
    <Router>
      <div className="main-wrapper">
        <Header />
        <div className="main-section">
          <Route path='/' render={props =>
            <HomeScreen
              qtyMeat={qtyMeat}
              qtyVeggie={qtyVeggie}
              setQtyMeat={setQtyMeat}
              setQtyVeggie={setQtyVeggie}
              pizzasInCart={pizzasInCart}
              setPizzasInCart={setPizzasInCart}
              qtyTotal={qtyTotal}
              setQtyTotal={setQtyTotal}
            />}
            exact
          />
          <Route path='/cart' render={props =>
            <CartScreen
              qtyMeat={qtyMeat}
              qtyVeggie={qtyVeggie}
              setQtyMeat={setQtyMeat}
              setQtyVeggie={setQtyVeggie}
              pizzasInCart={pizzasInCart}
              setPizzasInCart={setPizzasInCart}
              qtyTotal={qtyTotal}
              setQtyTotal={setQtyTotal}
              orders={orders}
              setOrders={setOrders}
            />
          }
            exact
          />

          <Route path='/cart/history' render={props =>
            <HistoryScreen

              orders={orders}
              setOrders={setOrders}

            />
          }
          />


        </div>
      </div>
    </Router>
  );
}

export default App;
