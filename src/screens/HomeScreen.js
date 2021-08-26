import React from 'react'


const HomeScreen = () => {
    return (
        <div className='home-screen'>
            <div className="pizza-options">

                <div href="" className='pizza '>
                    <h1 className='meat'>Meat lovers</h1>
                    <a href="">
                        <img src={'/images/meat.png'} alt="" />
                    </a>
                </div>

                <div href="" className='pizza veggie'>
                    <h1 className='veggie'>Veggie</h1>
                    <a href="">
                        <img src={'/images/veggie.png'} alt="" />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default HomeScreen
