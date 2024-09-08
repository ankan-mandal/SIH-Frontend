import React, { useEffect, useState } from 'react'
import "./Products.css"
import ProductCard from '../../components/ProductCard/ProductCard'
import apiClient from '../../utils/apiClient'
import { Link } from 'react-router-dom'

const Products = () => {

  const [products, setProducts] = useState([])

  const fetchAllProducts = async () => {
    try {
      const result = await apiClient.get("/product/all?limit=30")
      setProducts(result.data)
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
            <h1 className="heading">Agri Grow</h1>
            
            <div className="cart_heading">
                <h3>Best Deal</h3>
                <h2>Offer Products</h2>
            </div>
            <p className="small_gray_text">Available Products</p>
            <div className="product_content">

            {products.map((product) => (
                <Link to={`/${product._id}`} key={product._id}>
                    <ProductCard 
                    title={product.title} 
                    imageUrl={product.imageUrl} 
                    original_price={product.original_price}
                    offer_price={product.offer_price}  
                    />
                </Link>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Products