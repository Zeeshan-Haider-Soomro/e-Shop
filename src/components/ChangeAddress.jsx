import React, { useState } from 'react';

const ChangeAddress = ({ setAddress, setIsModalOpen }) => {
    const [newAddress, setNewAddress] = useState("")
    const onClose = () => {
        setAddress(newAddress)
        setIsModalOpen(false)
    }
  return (
    <div className="">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Change Address</h2>
      <input 
        type="text" 
        placeholder="Enter new address" 
        onChange={(e)=>setNewAddress(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex justify-end gap-2 mt-4">
        <button 
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 cursor-pointer"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button onClick={onClose}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
