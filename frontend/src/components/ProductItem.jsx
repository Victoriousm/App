/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
  const {currency} = useContext(ShopContext)
  
  return (
    <Link 
      className="text-gray-700 cursor-pointer block max-w-xs mx-auto sm:max-w-sm md:max-w-md" 
      to={`/product/${id}`}
    >
      <div className="overflow-hidden flex justify-center">
        <img 
          className="hover:scale-110 transition ease-in-out 
                     h-40 w-40 object-cover rounded-full 
                     sm:h-60 sm:w-60 md:h-80 md:w-full" 
          src={image[0]} 
          alt={name} 
        />
      </div>
      <p className="pt-3 pb-1 text-sm text-center truncate">{name}</p>
      <p className="text-sm font-medium text-center">{currency}{price}</p>
    </Link>
  )
}

export default ProductItem