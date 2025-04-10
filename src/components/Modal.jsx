import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ setIsModalOpen, isModalOpen, children }) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-[100]">
      <div className="bg-white rounded-lg shadow-xl p-4 w-full max-w-sm relative">
        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer" 
          onClick={() => setIsModalOpen(false)}
        >
          <X size={24} />
        </button>
        <div className="text-center">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
