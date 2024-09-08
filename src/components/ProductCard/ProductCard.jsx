import React from 'react'
import "./ProductCard.css"
import { product } from '../../assets/assets'

const ProductCard = ({title, imageUrl, original_price, offer_price}) => {
  return (
    <div className="product_item">
        <img src={imageUrl} alt="" />
        <div>{title}</div>
        <div className="strike">Rs {original_price}</div>
        <div className="sale_price">Rs {offer_price}</div>
    </div>
  )
}

export default ProductCard