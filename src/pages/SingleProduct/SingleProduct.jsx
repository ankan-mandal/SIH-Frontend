import React, { useContext, useEffect, useState } from 'react'
import "./SingleProduct.css"
import { bag, productSingle } from '../../assets/assets'
import { useParams } from 'react-router-dom'
import apiClient from '../../utils/apiClient'
import {CartContext} from '../../context/CartContext'

const SingleProduct = () => {

  const {addToCartHandler} = useContext(CartContext)

  const {productId} = useParams()
  const [product, setProduct] = useState({})

  const fetchProduct = async () => {
    try {
      const result = await apiClient.get(`/product/${productId}`);
      setProduct(result.data)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }


  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <div className='single_product'>
      <div className="image_container">
        <img src={product.imageUrl} alt="" />
      </div>
      <div className="title" style={{textTransform: "capitalize"}}>
        {product.title}
      </div>
      <div className="strike">Rs {product.original_price}</div>
      <div className="sale_price">Rs {product.offer_price}</div>
      <div className="description">
        {product.description}
        </div>
        <div className="cart_btn">
          <button className="add_to_cart" onClick={() => addToCartHandler(product)}>
            <img src={bag} className="bag_icon"/>
            Add to Cart
          </button>
        </div>
    </div>
  )
}

export default SingleProduct