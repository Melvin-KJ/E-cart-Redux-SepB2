import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>
      <Header />
      <div className="px-5" style={{ paddingTop: '100px' }}>
        <>
          <h1 className="text-5xl font-bold text-blue-600">Cart Summary</h1>
          <div className="grid grid-cols-3 gap-4 rounded p-5 shadow">
            <div className="col-span-2 border rounded p-5 shadow">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <td className="font-semibold">#</td>
                    <td className="font-semibold">Name</td>
                    <td className="font-semibold">Image</td>
                    <td className="font-semibold">Quantitiy</td>
                    <td className="font-semibold">Price</td>
                    <td className="font-semibold">...</td>
                  </tr>
                </thead>
                <tbody>
                  <td>1</td>
                  <td>Product name</td>
                  <td>
                    <img
                      width={'70px'}
                      height={'70px'}
                      src="https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                    />
                  </td>
                  <td>
                    <div className="flex">
                      <button className="font-bold">-</button>
                      <input
                        type="text"
                        style={{ width: '40px' }}
                        className="border p-1 mx-2 rounded"
                        value={12}
                        readOnly
                      />
                      <button className="font-bold">+</button>
                    </div>
                  </td>
                  <td>$ 250</td>
                  <td>
                    <button className="text-red-600">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tbody>
              </table>
              <div className="float-right mt-5">
                <button className="bg-red-600 text-white rounded p-2">
                  EMPTY CART
                </button>
                <Link
                  to={'/'}
                  className="bg-blue-600 text-white rounded p-3 ms-3"
                >
                  SHOP MORE
                </Link>
              </div>
            </div>
            <div className="col-span-1">
              <div className="border rounded shadow p-5">
                <h2 className="text-2xl font-bold">
                  Total Amount : <span className="text-red-600">$ 250</span>
                </h2>
                <hr />
                <button className="bg-green-600 mt-5 w-full rounded p-2 text-white">
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Cart;
