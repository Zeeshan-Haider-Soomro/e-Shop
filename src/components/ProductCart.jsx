import React from 'react';
import { FaStar } from 'react-icons/fa';
import { AddToCart } from '../redux/CartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router';

const ProductCart = ({ product }) => {
    const dispatch = useDispatch()
    const handleAddToCart = (e,product) => {
        e.stopPropagation()
        e.preventDefault()
        dispatch(AddToCart(product))
        alert('addded product')

    }
  return (
    <Link to={`/product/${product.id  }`}>
      <div className="bg-white shadow relative border border-gray-500 rounded p-4 transition-transform transform hover:scale-105 duration-300 cursor-pointer">
        <img src={product.image} alt={product.name} className="w-full h-48 object-contain rounded-md" />
        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
        <div className="flex text-yellow-400 my-2">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
        <div className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-28 hover:bg-red-700 transition-all' onClick={(e)=>handleAddToCart(e,product)}>
            <span className='group-hover:hidden'>+</span>
            <span className='hidden group-hover:block'>Add to cart</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCart;