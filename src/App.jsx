import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import Products from './pages/Products/Products'
import CartList from './pages/CartList/CartList'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Address from './pages/Address/Address'
import ThankYou from './pages/ThankYou/ThankYou'
import Notification from './pages/Notification/Notification'
import Profile from './pages/Profile/Profile'
import Scan from './pages/Scan/Scan'
import Register from './pages/Register/Register'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AddProduct from './pages/Admin/AddProduct'
import Order from './pages/Admin/Order'
import AdminSingleProduct from './pages/Admin/AdminSingleProduct'
import SingleOrder from './pages/Admin/SingleOrder'

function App() {

  return (
    <div className="container">
      <div className="header_bg"></div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/cart/list" element={<CartList />} />
        <Route path="/address" element={<Address />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/orders" element={<Order />} />
        <Route path="/admin/orders/:id" element={<SingleOrder />} />
        <Route path="/admin/product/:id" element={<AdminSingleProduct />} />

        <Route path="/:productId" element={<SingleProduct />} />
      </Routes>
      <Navbar />
    </div>
  )
}

export default App
