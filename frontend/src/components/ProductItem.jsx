/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
  const {currency} = useContext(ShopContext)

  return (
    <Link 
      className="text-gray-700 cursor-pointer block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" 
      to={`/product/${id}`}
    >
      <div className="overflow-hidden rounded-lg">
        <img 
          className="hover:scale-105 transition ease-in-out 
                     w-full h-auto object-cover" 
          src={image[0]} 
          alt={name} 
        />
      </div>
      <p className="pt-2 text-sm font-medium truncate">{name}</p>
      <p className="text-sm font-semibold">{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
