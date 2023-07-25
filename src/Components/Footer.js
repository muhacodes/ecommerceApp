import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-center justify-start sm:gap-52 gap-10 mt-24 md:mt-52  mb-10'>
        <div className='flex flex-col gap-4'>
            <h3 className='text-lg text-left ml-6 sm:ml-0 font-bold uppercase'> Help & information </h3>
            <ul className='text-left flex flex-col gap-2 ml-6 sm:ml-0  text-gray-500 font-thin'>
                <li> Track Order </li>
                <li> Delivery & Returns </li>

                <li> Premier Delivery </li>
                <li> FAQs </li>
            </ul>
        </div>

        <div className='flex flex-col gap-4' >
            <h3 className='text-lg ml-6 sm:ml-0 font-bold text-left uppercase'> ABOUT SUPRO </h3>
            <ul className='text-left flex flex-col gap-2 ml-6 sm:ml-0 text-gray-500 font-thin'>
                <li> About us </li>
                <li> Careers </li>

                <li> Coporate </li>
                <li> Investors </li>
            </ul>
        </div>

        <div className='flex flex-col gap-4'>
            <h3 className='text-lg ml-6 sm:ml-0 text-left font-bold uppercase'> ONLINE SHOP </h3>
            <ul className='text-left flex flex-col gap-2 ml-6 sm:ml-0 text-gray-500 font-thin'>
                <li> Shoes </li>
                <li> Bags </li>

                <li>  Wallet </li>
                <li> Belts </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer