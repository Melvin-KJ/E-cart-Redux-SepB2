import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ insideHome }) => {
  const userWishlist = useSelector((state) => state.wishlistReducer);
  const userCart = useSelector((state) => state.cartReducer);

  return (
    <nav className="flex bg-violet-600 fixed w-full p-5">
      <Link className="text-2xl font-bold" to={'/'}>
        <i className="fa-solid fa-truck-fast me-1"></i>Daily Cart
      </Link>
      <ul className="flex-1 text-right">
        {insideHome && (
          <li className="list-none inline-block px-5">
            <input type="text" placeholder="Search Products here... " />
          </li>
        )}
        <li className="list-none inline-block px-5">
          <Link to="/wishlist" className="flex items-center">
            <i className="fa-solid fa-heart text-red-600"></i>
            <span className="ml-2">Wishlist</span>
            <span className="bg-black text-white ml-2">
              {userWishlist?.length}
            </span>
          </Link>
        </li>
        <li className="list-none inline-block px-5">
          <Link to="/cart" className="flex items-center">
            <i className="fa-solid fa-cart-plus text-green-600"></i>
            <span className="ml-2">Cart</span>
            <span className="bg-black text-white ml-2">{userCart?.length}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
