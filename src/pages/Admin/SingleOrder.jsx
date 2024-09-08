import React, { useEffect, useState } from 'react'
import "./SingleOrder.css"
import AdminNavbar from './AdminNavbar'
import toast from 'react-hot-toast'
import apiClient from '../../utils/apiClient'
import { useNavigate, useParams } from 'react-router-dom'

const deleteBtn = {
  color: "white",  
  background: "red",
  border: "none",
  borderRadius: "8px",
  padding: "10px 15px",
  marginLeft: "10px",
  cursor: "pointer"
}

const SingleOrder = () => {

  const {id} = useParams()
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  const [order, setOrder] = useState({})
  const [totalPrice, setTotalPrice] = useState(0)

  const [products, setProducts] = useState([]);

  const fetchOrder = async () => {
    try {
      const res = await apiClient.get(`/order/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setOrder(res.data)
      setProducts(res.data.products)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }


  // Function to calculate the total offer price
  const calculateTotalOfferPrice = () => {
    return products.reduce((total, product) => total + product.offer_price, 0);
  };

  const deleteOrderHandler = async () => {
    try {
      const res = await apiClient.delete(`/order/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      toast.success(res.data.message)
      navigate("/admin/orders")
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    fetchOrder()
  }, [])

  return (
    <div className="dashboard box_over">
        <div className="center_div">
            <h1 className="heading">Order Details</h1>
            <AdminNavbar />
            <div className="single_order">
              <div className="detail_content">
                <div>Name: {order.fullName}</div>
                <div>Phone: {order.phone}</div>
                <div>Address: {order.address}</div>
                <div>City: {order.city}</div>
                <div>Pin Code: {order.pinCode}</div>
              </div>
              <div className="detail_content" >
                Delete this Order:  <button onClick={deleteOrderHandler} style={deleteBtn}>Delete</button>
              </div>
              <div className="detail_content">
                <p>Products</p>
                {
                  order.products?.map((product, index) => (
                    <div className="product_box" key={index}>
                    <img src={product.imageUrl} alt="" />
                    <div style={{textTransform: "capitalize"}}>{product.title}</div>
                    <div style={{color: "green"}}>Rs {product.offer_price}</div>
                  </div>
                  ))
                }
              </div>
              <div className="detail_content" >
                Total Price: <span style={{color: "green", fontSize: "18px"}}>₹ {calculateTotalOfferPrice()}</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SingleOrder