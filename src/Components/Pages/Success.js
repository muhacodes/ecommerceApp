import React, { Fragment } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

function Success() {
  return (
    <Fragment>

        <h2 className='center mt-24 mb-6 font-bold text-2xl md:text-5xl'> Checkout Success </h2>
        <p className='center font-bold text-lg  text-gray-600'> Your order has been proceed. <br></br>Thank you! </p>

        <button className='border bg-red-900 p-4 text-lg my-16 text-white font-serif font-extrabold'> 
        <Link to='/' > Continue Shopping </Link>  
        </button>


        <Footer />
    </Fragment>
  )
}

export default Success