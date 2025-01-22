import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementQuantity,
  emptyCart,
  incrementQuantity,
  removeCartItem,
} from '../redux/slices/cartSlice';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usercart = useSelector((state) => state.cartReducer);
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    if (usercart?.length > 0) {
      setCartTotal(
        usercart?.map((item) => item.totalPrice).reduce((a1, a2) => a1 + a2, 0)
      );
    }
  }, [usercart]);

  const handleDecrement = (product) => {
    if (product?.quantity > 1) {
      dispatch(decrementQuantity(product.id));
    } else {
      dispatch(removeCartItem(product.id));
    }
  };

  const handleCheckout = () => {
    dispatch(emptyCart());
    alert('Order confirmed!!!');
    //redirect to home
    navigate('/');
  };
  return (
    <>
      <Header />
      <div className="px-5" style={{ paddingTop: '100px' }}>
        {usercart?.length > 0 ? (
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
                    {usercart?.map((product, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{product?.title}</td>
                        <td>
                          <img
                            width={'70px'}
                            height={'70px'}
                            src={product?.thumbnail}
                            alt=""
                          />
                        </td>
                        <td>
                          <div className="flex">
                            <button
                              onClick={() => handleDecrement(product)}
                              className="font-bold"
                            >
                              -
                            </button>
                            <input
                              type="text"
                              style={{ width: '40px' }}
                              className="border p-1 mx-2 rounded"
                              value={product?.quantity}
                              readOnly
                            />
                            <button
                              onClick={() =>
                                dispatch(incrementQuantity(product?.id))
                              }
                              className="font-bold"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>{product?.totalPrice}</td>
                        <td>
                          <button
                            onClick={() =>
                              dispatch(removeCartItem(product?.id))
                            }
                            className="text-red-600"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="float-right mt-5">
                  <button
                    onClick={() => dispatch(emptyCart())}
                    className="bg-red-600 text-white rounded p-2"
                  >
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
                    Total Amount :{' '}
                    <span className="text-red-600">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </h2>
                  <hr />
                  <button
                    onClick={handleCheckout}
                    className="bg-green-600 mt-5 w-full rounded p-2 text-white"
                  >
                    CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-100 h-1/2"
              src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--state-no-items-zero-page-added-states-pack-design-development-illustrations-4610092.png"
              alt=""
            />
            <h1 className="text-3xl text-red-600">Your Cart is empty!!!</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
