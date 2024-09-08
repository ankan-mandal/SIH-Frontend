import React, { useContext, useEffect } from 'react'
import "./ThankYou.css"
import { logo } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ThankYou = () => {

    const {setCart} = useContext(CartContext)
    
    useEffect(() => {
        setCart([])
    }, [])

  return (
    <div className="dashboard box_over">
        <div className="center_div">
            <h1 className="heading">Thank You</h1>
            <div className="order_success">
                <img src={logo} />
                Order Placed Successfully!
                <div className="buy_now">
                    <Link to="/">
                        <button>GO TO HOME</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThankYou