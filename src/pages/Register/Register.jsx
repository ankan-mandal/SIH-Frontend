import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {Link, useNavigate} from "react-router-dom"
import apiClient from '../../utils/apiClient'

const Register = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const token = localStorage.getItem("token")
  
    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await apiClient.post("/auth/register", {name, email, password})
            toast.success(res.data.message)
            localStorage.setItem("token", res.data.token)
            navigate("/admin")
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    if(token){
        return (
            <Link to="/admin">
            <div className="buy_now" style={{textAlign: "center"}}>
                <button>Go to Admin Dashboard</button>
            </div>
            </Link>
        )
    }

  return (
    <div className="dashboard box_over">
        <div className="center_div">
            <h1 className="heading">Register</h1>
            <div className='input_container'>
                <form onSubmit={submitHandler}>
                <div className='input_field'>
                    <label>Name</label>
                    <input type="text" placeholder='Name' name="name"
                    value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='input_field'>
                    <label>Email</label>
                    <input type="email" placeholder='Email' name="email"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='input_field'>
                    <label>Password</label>
                    <input type="password" placeholder='Password' name="email"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='input_field'>
                    <label>Already have an account? <Link to="/profile">Login</Link></label>
                </div>
                <div className="buy_now">
                    <button>REGISTER</button>
                </div>
                </form>
              </div>
        </div>
    </div>
  )
}

export default Register