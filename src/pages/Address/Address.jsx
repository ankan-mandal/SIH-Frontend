import React, { useContext, useState } from 'react'
import "./Address.css"
import { Link, useNavigate } from 'react-router-dom'
import { address, product } from '../../assets/assets'
import { CartContext } from '../../context/CartContext'
import apiClient from '../../utils/apiClient'
import toast from 'react-hot-toast'

const Address = () => {

    const {cart} = useContext(CartContext)
    const navigate = useNavigate()

    const [detail, setDetail] = useState({
        fullName: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pinCode: "",
        products: cart
    })

    const submitHandler = async (e) => {
        e.preventDefault()
        const res = await apiClient.post("/order/add", detail)
        toast.success("Order Placed Successfully!")
        navigate("/thank-you")
    }   

  return (
    <div className="dashboard box_over">
        <div className="center_div">
            <h1 className="heading">Address</h1>
            <div className='input_container'>
                <form onSubmit={submitHandler}>
                <div className='input_field'>
                    <label>Full Name</label>
                    <input type="text" placeholder='Full Name' name="fullName" required
                    value={detail.fullName} onChange={(e) => setDetail(prev => ({...prev, [e.target.name]: e.target.value}))} />
                </div>

                <div className="input_field">
                    <label>Mobile Number</label>
                    <input type="text" placeholder='Mobile Number' name="phone" required
                    value={detail.phone} onChange={(e) => setDetail(prev => ({...prev, [e.target.name]: e.target.value}))} />
                </div>

                <div className="input_field">
                    <label>Full Address</label>
                    <input type="text" placeholder='Address' name="address" required
                    value={detail.address} onChange={(e) => setDetail(prev => ({...prev, [e.target.name]: e.target.value}))} />
                </div>

                <div className="input_field">
                    <label>City</label>
                    <input type="text" placeholder='City' name="city" required
                    value={detail.city} onChange={(e) => setDetail(prev => ({...prev, [e.target.name]: e.target.value}))} />
                </div>

                <div className="input_field">
                    <label>State</label>
                    <input type="text" placeholder='State' name="state" required
                    value={detail.state} onChange={(e) => setDetail(prev => ({...prev, [e.target.name]: e.target.value}))} />
                </div>

                <div className="input_field">
                    <label>Pin Code</label>
                    <input type="text" placeholder='Pin Code' name="pinCode" required
                    value={detail.pinCode} onChange={(e) => setDetail(prev => ({...prev, [e.target.name]: e.target.value}))} />
                </div>
                
                <div className="buy_now">
                    <button type="submit">PLACE ORDER</button>
                </div>
                
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default Address