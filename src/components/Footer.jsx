import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo & Description */}
        <div>
          <h3 className="text-2xl font-bold">e-Shop</h3>
          <p className="text-gray-400 mt-2">Your one-stop destination for all your shopping needs.</p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            <li><Link to="/home" className="text-gray-400 hover:text-white transition">Home</Link></li>
            <li><Link to="/shop" className="text-gray-400 hover:text-white transition">Shop</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
          </ul>
        </div>
        
        {/* Social Links & Subscription */}
        <div>
          <h4 className="text-xl font-semibold">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4 mt-3">
            <Link to="#" className="text-gray-400 hover:text-white transition text-2xl"><FaFacebook /></Link>
            <Link to="#" className="text-gray-400 hover:text-white transition text-2xl"><FaGithub /></Link>
            <Link to="#" className="text-gray-400 hover:text-white transition text-2xl"><FaLinkedin /></Link>
            <Link to="#" className="text-gray-400 hover:text-white transition text-2xl"><FaYoutube /></Link>
            <Link to="#" className="text-gray-400 hover:text-white transition text-2xl"><FaTwitter /></Link>
            <Link to="#" className="text-gray-400 hover:text-white transition text-2xl"><FaInstagram /></Link>
          </div>
          <form className="mt-4 flex justify-center md:justify-start">
            <input type="text" placeholder="Enter your email" className="px-4 py-2 rounded-l bg-white text-black focus:outline-none" />
            <button className="px-4 py-2 bg-gray-800 text-white rounded-r hover:bg-gray-700 transition">Subscribe</button>
          </form>
        </div>
      </div>
      <div className='mt-8 border-t border-gray-700 pt-4'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <p>&copy; {new Date().getFullYear()} e-Shop All rights reseved.</p>
      <div className='flex space-x-4 mt-4 md:mt-0'>
        <Link className='hover:underline'>Privacy & Policy.</Link>
        <Link className='hover:underline'>Term & Conditions.</Link>
      </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;