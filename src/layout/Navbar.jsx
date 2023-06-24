import React from 'react'
import { Link } from 'react-router-dom'
import jazzylogo from '../assets/image 2.svg'
import location from '../assets/Vector.svg'
import locationAddress from '../assets/Lagos, Nigeria.svg'
import allProductsLogo from '../assets/Group 33.svg'
import guestLogo from '../assets/Group 34.svg'
import notoficationLogo from '../assets/Group 2 (1).svg'

const Navbar = () => {
  return (
    <div className='container'>
        <header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex gap-5'>
                <Link to='/'>
                <img className='img-fluid' src={jazzylogo} alt="jazzy-logo" />
                </Link>
                <img className='img-fluid' src={location} alt="location-logo" />
                <img className='img-fluid' src={locationAddress} alt="location-address-logo" />

            </div>    
                <nav>
                    <ul className='d-flex gap-4'>
                        <li className='list-unstyled'>
                            <img className='img-fluid' src={allProductsLogo} alt="all-product-logo" />
                        </li>
                        <li className='list-unstyled'>
                            <img className='img-fluid' src={guestLogo} alt="" />
                        </li>
                        <li className='list-unstyled'>
                            <Link to='/Cart'>
                            <img className='img-fluid' src={notoficationLogo} alt="" />
                            </Link>
                        </li>
                    </ul>
                </nav>
            
        </header>
    </div>
  )
}

export default Navbar