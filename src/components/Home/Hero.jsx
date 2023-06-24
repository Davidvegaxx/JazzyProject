import React from 'react'
import heroImage from '../../assets/image 3.svg'

const Hero = () => {
  return (
    <div className='container mt-5'>
        <img className='img-fluid w-100' src={heroImage} alt="hero-image" />
    </div>
  )
}

export default Hero