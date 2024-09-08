import React, { useEffect, useState } from 'react'
import apiClient from "../../utils/apiClient"
import "./Order.css"
import AdminNavbar from './AdminNavbar'
import { Link } from 'react-router-dom'

const Order = () => {

    const token = localStorage.getItem("token")
    const [orders, setOrders] = useState([])

    const fetchOrders = async () => {
        try {
            const res = await apiClient.get("/order/all", {
                headers: {
                    "Authorization" : `Bearer ${token}`
                }
            })
            setOrders(res.data)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    console.log(orders)

    useEffect(() => {
        fetchOrders()
    }, [])

  return (
    <div className="dashboard box_over">
        <div className="center_div">
            <h1 className="heading">Orders</h1>
            <AdminNavbar />
            {orders.length === 0 && <p style={{color: "gray"}}>No Order Found!</p>}
            {
                orders.map((order, index) => (
                    <Link to={`/admin/orders/${order._id}`}>
                    <div className='order_item'>
                        <div>{index+1}. {order.fullName}</div>
                        <div>{order.city}</div>
                        <div>{order.createdAt.substring(0, 10)}</div>
                    </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Order