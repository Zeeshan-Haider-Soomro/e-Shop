import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { CreditCard, User, Calendar, Lock } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useOutletContext } from 'react-router'; // instead of 'react-router'

const CheckOut = () => {

  const { setOrder } = useOutletContext();

  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const cart = useSelector((state) => state.cart);
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: ""
  })

  const navigate = useNavigate()
  const handleOrder = () => {
    const  newOrder = {
      products: cart.products,
      orderNumber: "12345",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice
    }
    setOrder(newOrder)
    navigate("/order-confirmation")
  }

  return (
    <div className="container mx-auto pb-5 px-4">
      <h3 className="text-2xl font-semibold mb-4 pl-5">Check Out</h3>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left section */}
        <div className="w-full lg:w-2/3 space-y-6 overflow-y-scroll h-100 p-5">
          {/* Billing Info */}
          <div className="border p-5 rounded-md bg-white shadow-md">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold">Billing Information</h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 mt-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700 font-bold">Name:</label>
                <input
                  type="text"
                  className="w-full py-2 px-3 border rounded"
                  placeholder="Enter Your Name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold">Email:</label>
                <input
                  type="email"
                  className="w-full py-2 px-3 border rounded"
                  placeholder="Enter Your Email"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold">
                  Contact Number:
                </label>
                <input
                  type="number"
                  className="w-full py-2 px-3 border rounded"
                  placeholder="Enter Your Phone Number"
                />
              </div>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="border p-4 rounded-md bg-white shadow-md">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold">Shipping Information</h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 mt-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700 font-bold">Address:</label>
                <input
                  type="text"
                  name="address"
                  className="w-full py-2 px-3 border rounded"
                  placeholder="Enter Your Address"
                  onChange={(e)=>setShippingInfo({...shippingInfo, address: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold">City:</label>
                <input
                  type="text"
                  name="city"
                  className="w-full py-2 px-3 border rounded"
                  placeholder="Enter Your City"
                  onChange={(e)=>setShippingInfo({...shippingInfo, city: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold">
                  Zip Code:
                </label>
                <input
                  type="number"
                  name="zip"
                  className="w-full py-2 px-3 border rounded"
                  placeholder="Enter Your Zip Code"
                  onChange={(e)=>setShippingInfo({...shippingInfo, zip: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="border p-4 rounded-md bg-white shadow-md">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold">Payment Method</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 mt-4 ${paymentToggle ? "" : "hidden"}`}>
              {/* COD */}
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label className="ml-2 text-gray-700 font-bold">
                  Cash on Delivery
                </label>
              </div>

              {/* Debit Card */}
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                />
                <label className="ml-2 text-gray-700 font-bold">
                  Debit Card
                </label>
              </div>

              {paymentMethod === "dc" && (
                <div className="p-4 bg-gray-50 rounded-md space-y-4">
                  <div>
                    <label className="block mb-1 font-medium">Card Number</label>
                    <div className="flex items-center border px-3 py-2 rounded bg-white">
                      <CreditCard className="mr-2 text-gray-500" />
                      <input
                        type="text"
                        placeholder="Enter Card Number"
                        className="w-full outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-1 font-medium">
                      Card Holder Name
                    </label>
                    <div className="flex items-center border px-3 py-2 rounded bg-white">
                      <User className="mr-2 text-gray-500" />
                      <input
                        type="text"
                        placeholder="Cardholder Name"
                        className="w-full outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full">
                      <label className="block mb-1 font-medium">
                        Expiry Date
                      </label>
                      <div className="flex items-center border px-3 py-2 rounded bg-white">
                        <Calendar className="mr-2 text-gray-500" />
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full outline-none"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label className="block mb-1 font-medium">CVV</label>
                      <div className="flex items-center border px-3 py-2 rounded bg-white">
                        <Lock className="mr-2 text-gray-500" />
                        <input
                          type="text"
                          placeholder="CVV"
                          className="w-full outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 bg-white p-4 rounded-xl shadow-md border h-full">
          <h3 className="text-xl font-semibold border-b pb-2">Order Summary</h3>

          <div className="max-h-64 overflow-y-scroll mt-4 space-y-3 pr-2">
            {cart.products.map((product, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border-b pb-2"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h4 className="text-base font-medium">{product.name}</h4>
                  <p className="text-gray-600 text-sm">${product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-lg font-medium border-t pt-4 mt-4">
            <span>Total Price:</span>
            <span>${cart.totalPrice.toFixed(2)}</span>
          </div>

          <button onClick={handleOrder} className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
