import { AddToCart } from '@/redux/CartSlice';
import React, { useEffect, useState } from 'react';
import { FaCarSide, FaQuestion } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { toast, ToastContainer } from "react-toastify";


const ProductDetail = () => {
    const { id } = useParams();
    const products = useSelector(state => state.product.products);
    const [product, setProduct] = useState();
    const navigate = useNavigate(); // 👈 Navigation hook

    // for add to cart functionality
    const [quantity, setQuantity] = useState(1); // 👈 Controlled input
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        if (product && quantity > 0) {
            dispatch(AddToCart({ ...product, quantity }));
                toast.success("Product added to cart!");
        }
    };

    const handleBuyNow = () => {
        handleAddToCart(); // 👈 Pehle cart mein daalo
            toast.success("Product added to cart!");
        navigate('/check-out'); // 👈 Then navigate
    };

    useEffect(() => {
        const newProduct = products.find(product => product.id === parseInt(id));
        setProduct(newProduct);
    }, [id, products]);

    if (!product) return <div className="text-center py-10 text-gray-600">Loading...</div>;

    return (
        <div className='p-5'>
            <ToastContainer position="top-right" autoClose={2000} />
        
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex items-center justify-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-80 w-auto object-contain rounded-xl"
                    />
                </div>

                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
                        <p className="text-xl text-gray-800 font-bold mb-6">${product.price}</p>

                        <div className="flex items-center space-x-4 mb-6">
                            <input
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                type="number"
                                min="1"
                                defaultValue="1"
                                className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <button onClick={handleAddToCart} className="px-5 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black border-2 border-black transition duration-200 cursor-pointer">
                                Add to Cart
                            </button>
                            <button
                                onClick={handleBuyNow}
                                className="px-5 py-2 border-2 border-black text-black rounded-lg transition duration-200 cursor-pointer hover:bg-black hover:text-white"
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>

                    <div className="space-y-3 text-gray-600 text-sm">
                        <div className="flex items-center gap-2">
                            <FaCarSide className="text-lg" />
                            <span>Fast Delivery & Easy Return</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaQuestion className="text-lg" />
                            <span>Need Help? Ask a Question</span>
                        </div>
                    </div>
                </div>
            <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-4">Product Description</h3>
                <p className="text-gray-700 leading-relaxed text-base">
                    Product description will go here... Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Distinctio, porro voluptatibus reiciendis error unde velit.
                </p>
            </div>
            </div>

        </div>
        </div>
    );
};

export default ProductDetail;
