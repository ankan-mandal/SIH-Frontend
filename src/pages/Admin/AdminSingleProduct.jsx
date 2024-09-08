import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import apiClient from '../../utils/apiClient';
import toast from 'react-hot-toast';

const buttonStyle = {
    background: "red",
    color: "#fff",
    padding: "20px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer"
}

const AdminSingleProduct = () => {

    const {id} = useParams();
    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    const [product, setProduct] = useState({})

    const fetchProduct = async () => {
        const res = await apiClient.get(`/product/${id}`)
        setProduct(res.data)
    }

    const deleteHandler = async () => {
        try {
            const res = await apiClient.delete(`/product/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
    
            toast.success(res.data.message)
            navigate("/admin")
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])

  return (
    <div className="dashboard box_over">
        <div className="center_div">
            <h1 className="heading">Delete Product</h1>
            <div>
                <img src={product.imageUrl} width={"200px"} style={{borderRadius: "8px"}} />
            </div>
            <h1>{product.title}</h1>
            <h2>Rs {product.offer_price}</h2>
            <p>{product.description}</p>
            <button style={buttonStyle} onClick={deleteHandler}>Delete Product</button>
        </div>
    </div>
  )
}

export default AdminSingleProduct