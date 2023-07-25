import React from 'react'

function ProductItem({product}) {
  return (
    <div className='grid grid-cols-1  mt-10 border border-gray-200 shadow-sm shadow-gray-300  hover:shadow-transparent  lg:w-64 sm:w-44 h-full p-4'>
      
        <img className='h-60 w-full' src={product.photo} />

      <p className='text-sm flex font-bold justify-start'> {product.name} </p>
      
      <div className='flex  justify-between'>
        <p className='flex justify-start text-base'> $3.90  </p>
        <button className="border hover:bg-black hover:duration-700 hover:text-white border-gray-400 border-solid text-sm px-2 py-2 rounded">
            Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductItem