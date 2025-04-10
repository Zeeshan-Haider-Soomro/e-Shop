import React from 'react'
import { useSelector } from 'react-redux'
import ProductCart from '../components/ProductCart'
import { Link } from 'react-router'

const Shop = () => {
  const products = useSelector(state => state.product)
  return (
    <div>
          <div className='md:px-16 lg:px-24 mx-auto py-12 p-5 m-4'>
              <Link to='/shop'><h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2></Link>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6'>
                  {products.products.map((product)=>(
                      <ProductCart product={product}/>
                  ))}
              </div>
            </div>
    </div>
  )
}

export default Shop