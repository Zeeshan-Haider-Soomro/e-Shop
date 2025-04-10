import React, { useState } from 'react';
import { FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import EmptyCartImage from '../assets/Images-main/emptycart.png';
import Modal from '@/components/Modal';
import ChangeAddress from '@/components/ChangeAddress';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '@/redux/CartSlice';
import { useNavigate } from 'react-router';

const AddToCart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [address, setAddress] = useState("johar, block #18, karachi, sindh")
    const [isModalOpen,setIsModalOpen] = useState(false)
    const navigate = useNavigate()

    return (
        <div className="max-w-6xl mx-auto p-6">
            {cart.products.length > 0 ? (
               <div>
                 <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-4">Shopping Cart</h3>
                    <div className="grid-cols-1 md:grid-cols-5 gap-4 border-b pb-2 font-semibold text-gray-600 hidden md:grid">
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                        <p>Remove</p>
                    </div>
                    {cart.products.map((product, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center py-4 border-b">
                            <div className="flex items-center space-x-4">
                                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                                <h3 className="text-lg font-medium">{product.name}</h3>
                            </div>
                            <p className="text-gray-600">${product.price.toFixed(2)}</p>
                            <div className="flex items-center space-x-2">
                                <button onClick={()=> dispatch(decreaseQuantity(product.id))} className="cursor-pointer p-2 bg-gray-200 rounded-md hover:bg-gray-300">
                                    <FaMinus />
                                </button>
                                <p className="px-4 py-2 border rounded-md">{product.quantity}</p>
                                <button onClick={()=> dispatch(increaseQuantity(product.id))} className="cursor-pointer p-2 bg-gray-200 rounded-md hover:bg-gray-300">
                                    <FaPlus />
                                </button>
                            </div>
                            <p className="text-gray-600">${(product.quantity * product.price).toFixed(2)}</p>
                            <button onClick={()=> dispatch(removeFromCart(product.id))} className="cursor-pointer text-red-500 hover:text-red-700">
                                <FaTrashAlt />
                            </button>
                        </div>
                    ))}
                    {/* <div className="text-right mt-4">
                        <button className="cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">Proceed to Checkout</button>
                    </div> */}
             
                </div>
                         {/* Cart Total Section */}
                         <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
                        <h3 className="text-2xl font-bold mb-4">Cart Total</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold">Total items:</span>
                                <span className="text-lg font-medium">{cart.totalQuantity}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold">Total Price:</span>
                                <span className="text-lg font-medium">
                                    ${cart.totalPrice.toFixed(2)}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold">Shipping:</span>
                                <span className="text-lg font-medium">Free</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold">Shipping To: {address}<span className='text-gray-700 text-sm font-bold'>{""}</span></span>
                                <button className='text-blue-500 hover:underline mt-1 ml-1 cursor-pointer' onClick={()=>setIsModalOpen(true)}>Change Address</button>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <button onClick={()=> navigate("/check-out")} className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition cursor-pointer">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}><ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen}/></Modal>
               </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-96">
                    <img src={EmptyCartImage} alt="Empty Cart" className="w-48" />
                    <p className="text-gray-600 text-lg mt-4">Your cart is empty!</p>
                </div>
            )}
        </div>
    );
};

export default AddToCart;
