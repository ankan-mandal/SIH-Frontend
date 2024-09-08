import React, { useState } from 'react'
import "./AddProduct.css"
import { blank_img } from '../../assets/assets'
import apiClient from '../../utils/apiClient'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

const AddProduct = () => {

    const token = localStorage.getItem("token")

    const navigate = useNavigate()

    const [product, setProduct] = useState({
        title: "",
        description: "",
        original_price: "",
        offer_price: "",
    })
    const [loading, setLoading] = useState(false)

    const [image, setImage] = useState("")
    const changeImage = (e) => {
        const imageFile = e.target.files[0]
        setImage(imageFile)
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const formData = new FormData();
            formData.append("title", product.title)
            formData.append("description", product.description)
            formData.append("original_price", product.original_price)
            formData.append("offer_price", product.offer_price)
            formData.append("file", image)

            const res = await apiClient.post("/product/add", formData, {
                headers: {
                    "Authorization" : `Bearer ${token}`
                }
            })
            toast.success(res.data.message)
            navigate("/admin")
            setLoading(false)
        } catch (error) {
            toast.error(error.response.data.message)
            setLoading(false)
        }
    }

  return (
    <div className="dashboard box_over">
        <div className="center_div">
            <h1 className="heading">Add a Product</h1>
            <AdminNavbar /><br/>
            <div className='input_container'>
                <form onSubmit={submitHandler}>

                <div className='input_field'>
                    <img src={image ? URL.createObjectURL(image) : blank_img} style={{borderRadius: "8px"}} /><br/>
                    <input type="file" onChange={changeImage} required accept="image/png, image/gif, image/jpeg" />
                </div>

                <div className='input_field'>
                    <label>Product Title</label>
                    <input type="text" placeholder='Product Title' name="title" required
                    value={product.title} onChange={(e) => setProduct(prev => ({...prev, [e.target.name]: e.target.value}))} />
                </div>

                <div className='input_field'>
                    <label>Description</label>
                    <input type="text" placeholder='Description' name="description" required
                    value={product.description} onChange={(e) => setProduct(prev => ({...prev, [e.target.name]: e.target.value}))} />
                </div>

                <div className='input_field'>
                    <label>Original Price (Rs)</label>
                    <input type="text" placeholder='Original Price' name="original_price" required
                    value={product.original_price} onChange={(e) => setProduct(prev => ({...prev, [e.target.name]: e.target.value}))} />
                </div>

                <div className='input_field'>
                    <label>Offer Price (Rs)</label>
                    <input type="text" placeholder='Offer Price' name="offer_price" required
                    value={product.offer_price} onChange={(e) => setProduct(prev => ({...prev, [e.target.name]: e.target.value}))} />
                </div>

                <div className="buy_now">
                    <button type="submit" disabled={loading}>{loading ? "Adding..." : "Add Product"}</button>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddProduct