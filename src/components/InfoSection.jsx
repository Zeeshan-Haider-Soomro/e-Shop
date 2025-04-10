import React from 'react';
import { FaHeadset, FaLock, FaShippingFast, FaTag } from 'react-icons/fa';
import { FaMoneyBill1Wave } from 'react-icons/fa6';

const InfoSection = () => {
    const infoItems = [
        {
            icon: <FaShippingFast className="text-blue-600 text-4xl" />, 
            title: "Free Shipping",
            description: "Enjoy free worldwide shipping on all orders with no minimum purchase."
        },
        {
            icon: <FaHeadset className="text-blue-600 text-4xl" />, 
            title: "Support 24/7",
            description: "Our customer service is available 24/7 to help with any inquiries."
        },
        {
            icon: <FaMoneyBill1Wave className="text-blue-600 text-4xl" />, 
            title: "100% Money Back",
            description: "Not satisfied? We offer a full refund within 30 days of purchase."
        },
        {
            icon: <FaLock className="text-blue-600 text-4xl" />, 
            title: "Payment Secure",
            description: "All transactions are encrypted and secured for your safety."
        },
        {
            icon: <FaTag className="text-blue-600 text-4xl" />, 
            title: "Exclusive Discounts",
            description: "Get access to exclusive discounts and promotional deals."
        },
        {
            icon: <FaShippingFast className="text-blue-600 text-4xl" />, 
            title: "Fast Delivery",
            description: "We ensure quick processing and fast delivery of your orders."
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 px-6">
            {infoItems.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300 ">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default InfoSection;
