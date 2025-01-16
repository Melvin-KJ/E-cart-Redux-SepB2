import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white p-8 text-center">
      <div className="flex flex-wrap justify-around gap-8">
        {/* E Cart Section */}
        <div className="max-w-xs text-left">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <i className="fa fa-truck"></i> E cart
          </h2>
          <p className="mt-2">
            Designed and built with all the love in the world by the Luminar
            team with the help of our contributors.
          </p>
          <p className="mt-2">Code licensed Luminar, docs CC BY 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>

        {/* Links Section */}
        <div className="text-left">
          <h3 className="font-bold text-lg">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to={"/"} className="hover:underline">
                Landing Page
              </Link>
            </li>
            <li>
              <a href="#home" className="hover:underline">
                Home Page
              </a>
            </li>
            <li>
              <a href="#history" className="hover:underline">
                Watch History Page
              </a>
            </li>
          </ul>
        </div>

        {/* Guides Section */}
        <div className="text-left">
          <h3 className="font-bold text-lg">Guides</h3>
          <ul className="space-y-2">
            <li>
              <a href="#react" className="hover:underline">
                React
              </a>
            </li>
            <li>
              <a href="#bootstrap" className="hover:underline">
                React Bootstrap
              </a>
            </li>
            <li>
              <a href="#router" className="hover:underline">
                React Router
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="text-left">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <div className="flex items-center mt-2">
            <input
              type="email"
              placeholder="Enter your email here"
              className="p-2 rounded-l-md text-black"
            />
            <button className="bg-white text-purple-700 p-2 rounded-r-md">
              <i className="fa fa-arrow-right"></i>
            </button>
          </div>
          <div className="flex space-x-4 mt-4 text-2xl">
            <a href="#twitter" className="hover:text-gray-300">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#instagram" className="hover:text-gray-300">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#facebook" className="hover:text-gray-300">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#linkedin" className="hover:text-gray-300">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#github" className="hover:text-gray-300">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="#phone" className="hover:text-gray-300">
              <i className="fa fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="mt-8">
        Copyright © June 2024 Batch, E Cart. Built with React Redux.
      </p>
    </footer>
  );
}

export default Footer