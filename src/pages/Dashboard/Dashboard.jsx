import React, { useEffect, useState } from 'react'
import "./Dashboard.css"
import { banner } from '../../assets/assets'
import ProductCard from '../../components/ProductCard/ProductCard'
import Category from '../../components/Category/Category'
import {Link} from "react-router-dom"
import apiClient from '../../utils/apiClient'

const Dashboard = () => {

    const [products, setProducts] = useState([])

    const fetchAllProducts = async () => {
        try {
            const result = await apiClient.get("/product/all?limit=15")
            setProducts(result.data)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    useEffect(() => {
        fetchAllProducts()
    }, [])

  return (
    <div className="dashboard box_over">
        <div className="center_div">
            <h1 className="heading">Agri Grow</h1>
            <div className="banner">
                <img src={banner} alt="banner" />
            </div>

            <Category />

            <div className="category">
                <h2>Recommended Products</h2>

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
    </div>
  )
}

export default Dashboard