import React from 'react';
import { useNavigate, useOutletContext } from 'react-router';

const Order = () => {
  const { order } = useOutletContext();
  const navigate = useNavigate();

  // Ensure order exists before rendering
  if (!order) {
    return (
      <div className="text-center text-red-600">
        <p>Order details not available. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-md rounded-2xl mb-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-600">Thank You for Your Order!</h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
        Your order has been placed successfully. You will receive an email confirmation shortly.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">Order Number: <strong>{order.orderNumber}</strong></p>

        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-2">Shipping Information</h4>
          <p className="text-gray-700 dark:text-gray-300">{order.shippingInformation.address}</p>
          <p className="text-gray-700 dark:text-gray-300">{order.shippingInformation.city}</p>
          <p className="text-gray-700 dark:text-gray-300">{order.shippingInformation.zip}</p>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-2">Products Ordered</h4>
          <div className="space-y-3">
            {order.products.map((product, index) => (
              <div key={index} className="flex justify-between items-center p-2 bg-white dark:bg-gray-700 rounded shadow-sm">
                <span>{product.name} x {product.quantity}</span>
                <span className="font-semibold">${(product.price * product.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center border-t pt-4 mt-4 text-lg font-semibold">
          <span>Total Price:</span>
          <span>${order.totalPrice.toFixed(2)}</span>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <button
            className="bg-green-600 text-white px-4 py-2 font-medium rounded-xl hover:bg-blue-700 transition cursor-pointer"
          >
            Order Tracking
          </button>
          <button
            onClick={() => navigate("/home")}
            className="bg-red-600 dark:bg-gray-700 text-white font-medium dark:text-white px-4 py-2 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
