import React, { useEffect, useState } from 'react'
import "./AdminDashboard.css"
import { Link } from 'react-router-dom'
import apiClient from '../../utils/apiClient'
import AdminNavbar from './AdminNavbar'

const AdminDashboard = () => {

  const token = localStorage.getItem("token")
  const [products, setProducts] = useState([])

  const fetchAllProducts = async () => {
    try {
      const result = await apiClient.get("/product/all-by-owner", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
      setProducts(result.data)
      console.log(result.data)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    fetchAllProducts()
  }, [])

  return (
    <div className="dashboard box_over">
        <div className="center_div">
            <h1 className="heading">Admin Dashboard</h1>

            <div className="admin">
              <AdminNavbar />
              <p style={{textAlign: "left"}}>All Products</p>
              {products.map((product, index) => (
                <Link to={`/admin/product/${product._id}`} key={index}>
                  <div className="product_box">
                    <img src={product.imageUrl} alt="" />
                    <div style={{textTransform: "capitalize"}}>{product.title}</div>
                    <div style={{color: "green"}}>Rs {product.offer_price}</div>
                  </div>
                </Link>
              ))}

            </div>
        </div>
    </div>
  )
}

export default AdminDashboard