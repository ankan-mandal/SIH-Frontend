import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import toast from 'react-hot-toast'
import apiClient from '../../utils/apiClient'

const Profile = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const token = localStorage.getItem("token")

  const submitHandler = async (e) => {
    e.preventDefault()
        try {
            const res = await apiClient.post("/auth/login", { email, password})
            toast.success(res.data.message)
            localStorage.setItem("token", res.data.token)
            navigate("/admin")
        } catch (error) {
            toast.error(error.response.data.message)
        }
  }

  if(token){
    return (
      <>
      <Link to="/admin">
      <div className="buy_now" style={{textAlign: "center"}}>
          <button>Go to Admin Dashboard</button>
      </div>
      </Link>

      <div className="buy_now" style={{textAlign: "center"}}>
      <button onClick={() => {
        localStorage.removeItem("token")
        navigate("/")
      }}>LOGOUT</button>
      </div>
      </>
    )
}

  return (
    <div className="dashboard box_over">
        <div className="center_div">
            <h1 className="heading">Login</h1>
            <div className='input_container'>
                <form onSubmit={submitHandler}>
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
                    <label>Don't have an account? <Link to="/register">Register</Link></label>
                </div>
                <div className="buy_now">
                    <button>LOGIN</button>
                </div>
                </form>
              </div>
        </div>
    </div>
  )
}

export default Profile