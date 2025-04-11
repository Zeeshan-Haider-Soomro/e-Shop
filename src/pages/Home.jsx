import React, { useEffect } from 'react';
import { Categories, mockData } from '../assets/MockData';
import HeroImage from "../assets/Images-main/hero-page.png";
import { Link } from 'react-router';
import InfoSection from '../components/InfoSection';
import CategorySection from '../components/CategorySection';
import { setProduct } from '../redux/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductCart from '../components/ProductCart';
import Shop from './Shop';


const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product)
    useEffect(()=>{
        dispatch(setProduct(mockData))
    })
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6">
        {/* Shop by Categories Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Shop by Categories</h2>
        
      {/* Categories Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8  px-2">
          {Categories.map((category, index) => (
            <button
              key={index}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full text-sm md:text-lg font-medium hover:from-blue-600 hover:to-blue-800 transition-transform hover:scale-105 duration-300 cursor-pointer shadow-md whitespace-nowrap "
            >
              {category}
            </button>
          ))}
        </div>

        {/* Hero Section and Categories Side by Side */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Hero Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-blue-600 font-semibold">Code with Zeeshan Haider</p>
            <h2 className="text-5xl font-bold text-gray-900 mt-2">WELCOME TO E-SHOP</h2>
            <p className="text-lg text-gray-700 mt-4">Millions+ Products</p>
          <Link to="/shop">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition-transform duration-300 cursor-pointer hover:scale-105">Shop Now</button>
          </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={HeroImage} alt="Hero" className="max-w-md w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
      <InfoSection/>
      <CategorySection/>
      <div className='container mx-auto py-12 p-5 m-4'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6'>
            {products.products.slice(0,5).map((product,index)=>(
                <ProductCart key={index} product={product}/>
            ))}
        </div>
      </div>
      <Shop/>
    </div>
  );
};

export default Home;
