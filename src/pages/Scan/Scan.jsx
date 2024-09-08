import React from 'react'
import "./Scan.css"
import { Link } from 'react-router-dom'
import {blank_img} from "../../assets/assets"

const Scan = () => {
  return (
    <div className="dashboard box_over">
        <div className="center_div">
            <h1 className="heading">Search for Plant Disease</h1>
            <img src={blank_img} className='image'/>
            <div className="buy_now">
                    <Link to="/">
                        <button>Upload Photo</button>
                    </Link>
                </div>
        </div>
    </div>
  )
}

export default Scan