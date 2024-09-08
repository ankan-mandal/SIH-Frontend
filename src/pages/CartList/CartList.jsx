import React, { useContext, useEffect, useState } from 'react'
import "./CartList.css"
import { product } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartList = () => {

    const {cart, removeHandler} = useContext(CartContext)
    const [count, setCount] = useState(1)
    const [total, setTotal] = useState(0)
    const [finalTotal, setFinalTotal] = useState(0)

    const decrement = () => {
        if(count === 1){
            return;
        }
        setCount(prev => prev - 1)
    }

    const totalHandler = () => {
        let newTotal = 0
        cart.map(product => {
            newTotal += product.offer_price
        })
        setTotal(newTotal)
        setFinalTotal(newTotal + 99)
    }

    useEffect(() => {
        totalHandler()
    }, [cart])

  return (
    <div className="dashboard box_over">
        <div className="center_div">
            <h1 className="heading">Cart</h1>
            <div className="cart_list">
                {cart.length === 0 && <p>No Item in Cart!</p>}
                {cart.map(product => (
                    <div className="cart_item" key={product._id}>
                    <div>
                        <img src={product.imageUrl} alt="" />
                    </div>
                    <div style={{textAlign: "left"}}>
                        <div className="name">{product.title}</div>
                        <div className="price">Rs {product.offer_price}</div>
                    </div>
                    <div>
                        <button className="remove" onClick={() => removeHandler(product._id)}>X</button>
                        <div className="counter">
                            <button >-</button>
                                {count}
                            <button>+</button>
                        </div>
                    </div>
                </div>
                ))}

                

                {cart.length > 0 && (
                    <>
                    <div className="promocode">
                    <input type="text" placeholder='Promo Code'/>
                    <button>Apply</button>
                </div>

                <div className="total_price">
                    <div className="total_price_item">
                        <div>Subtotal</div>
                        <div>Rs {total}</div>
                    </div>
                    <div className="total_price_item">
                        <div>Taxes & Delivery</div>
                        <div>Rs 99</div>
                    </div>
                    <div className="total_price_item">
                        <div>Total</div>
                        <div>Rs {finalTotal}</div>
                    </div>
                </div>

                <Link to="/address">
                    <div className="buy_now">
                        <button>BUY NOW</button>
                    </div>
                </Link>
                </>
                )}
                


            </div>
        </div>
    </div>
  )
}

export default CartList