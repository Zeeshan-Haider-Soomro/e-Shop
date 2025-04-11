import React, { useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import "../index.css";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "@/redux/ProductSlice";

const Header = () => {
  const products = useSelector((state) => state.cart.products || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setSearchTerm(search))
    navigate('/filterData')
  }

  const openSignUp = () => {
    setIsLogin(false);
    setIsModalOpen(true);
  };
  const openLogin = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* header */}
      <header className="header-design bg-transparent backdrop-blur-md text-[#003366] m-4 rounded-full py-2 px-6 shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/" className="text-[#003366] transition">
              e-Shop
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/home"
              className="text-[#003366] font-bold hover:text-[#004477] hover:underline transition"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-[#003366] font-bold hover:text-[#004477] hover:underline transition"
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className="text-[#003366] font-bold hover:text-[#004477] hover:underline transition"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="text-[#003366] font-bold hover:text-[#004477] hover:underline transition"
            >
              About
            </Link>
          </nav>

          {/* Search Bar */}
          <form onChange={handleSubmit}>
            <div className="relative flex-1 max-w-lg hidden md:flex items-center">
              <input
                onChange={(e)=> setSearch(e.target.value)}
                type="text"
                placeholder="Search Products..."
                className="w-full px-4 py-2 bg-white text-[#003366] border border-blue-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <FaSearch className="absolute right-4 text-blue-500 cursor-pointer" />
            </div>
          </form>

          {/* User Actions */}
          <div className="flex items-center space-x-6">
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-2xl text-[#003366] transition" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {products.length || 0}
              </span>
            </Link>

            {/* Login/Register Button */}
            <Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="hidden md:flex items-center bg-white text-[#003366] px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition cursor-pointer"
              >
                Login | Register
              </button>
            </Link>

            {/* User Icon */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex md:hidden text-[#003366] text-2xl hover:text-gray-200 transition cursor-pointer"
            >
              <FaUser />
            </button>

            {/* Hamburger Menu for Mobile */}
            <Sheet>
              <SheetTrigger className="md:hidden text-[#003366] text-2xl">
                <FaBars />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="transform transition-transform duration-300 ease-in-out flex flex-col items-center justify-center h-full bg-white p-4 space-y-6"
              >
                <div className="text-3xl font-bold text-[#003366]">e-Shop</div>
                <nav className="flex flex-col space-y-4 text-center">
                  <Link
                    to="/home"
                    className="text-[#003366] font-bold hover:text-[#004477] hover:underline transition"
                  >
                    Home
                  </Link>
                  <Link
                    to="/shop"
                    className="text-[#003366] font-bold hover:text-[#004477] hover:underline transition"
                  >
                    Shop
                  </Link>
                  <Link
                    to="/contact"
                    className="text-[#003366] font-bold hover:text-[#004477] hover:underline transition"
                  >
                    Contact
                  </Link>
                  <Link
                    to="/about"
                    className="text-[#003366] font-bold hover:text-[#004477] hover:underline transition"
                  >
                    About
                  </Link>
                </nav>
                <div className="mt-8 border-t border-gray-700 pt-4">
                  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <p>
                      &copy; {new Date().getFullYear()} e-Shop All rights
                      reseved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                      <Link className="hover:underline">Privacy & Policy.</Link>
                      <Link className="hover:underline">
                        Term & Conditions.
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      {/* modal */}
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </div>
  );
};

export default Header;
