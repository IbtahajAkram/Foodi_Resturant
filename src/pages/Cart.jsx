import React, { useState } from "react";
import {
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
  ArrowLeft,
  Gift,
  Truck,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import Confetti from "react-confetti";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import {
  DecreaseQuantity,
  DeleteAllCartItems,
  DeleteSingleItems,
  IncreseQuantity,
} from "../Redux/CartSlicer/FoodCartSlicer";

const Cart = () => {
  const [inputValue, setInputValue] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  const cartItems = useSelector(
    (state) => state?.FoodCartSlicer?.FoodCartItems
  );
  const dispatch = useDispatch();
  const handleDeleteAllItems = () => {
    dispatch(DeleteAllCartItems());
  };
  const handleDeleteSingleItem = (id) => {
    dispatch(DeleteSingleItems(id));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);   
  };
  const CartTotalPrice = cartItems.reduce((prevPrice,NextPrice)=>{return prevPrice + NextPrice.price * NextPrice.quantity},0);
const [discount,setDiscount] = useState(false)
  const handleApply = () => { 
    if (inputValue.toLowerCase() === "muhammad zawwar") {
      setShowConfetti(true);
      toast.success('Your got 30$ discount');
setDiscount(true);
      setTimeout(()=>{
        setShowConfetti(false);
      },8000)
    } else {
      setShowConfetti(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0">
  {/* Back Button and Title */}
  <div className="flex items-center space-x-4">
    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
      <NavLink to={"/"}>
        <ArrowLeft className="h-6 w-6 text-gray-600" />
      </NavLink>
    </button>
    <h1
      style={{ fontFamily: "'Dancing Script', cursive" }}
      className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left"
    >
      Shopping Cart
    </h1>
  </div>

  {/* Remove All Items Button */}
  <div className="flex md:ml-[49%] items-center bg-white px-4 py-2 rounded-full shadow-sm justify-center">
    <button
      onClick={handleDeleteAllItems}
      className="text-sm sm:text-base md:text-[16.4px] font-semibold text-gray-900"
    >
      Remove All Cart Items
    </button>
  </div>

  {/* Cart Summary */}
  <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm justify-center">
    <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
    <span className="ml-2 text-sm sm:text-base md:text-[16.4px] font-semibold text-gray-900">
      {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
    </span>
  </div>
</div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="hidden md:block lg:block">
          {showConfetti && <Confetti  width={1210} height={1000}/>}
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-2xl font-semibold text-gray-500 mb-4">
                    Your cart is empty
                  </p>
                  <NavLink to={"/"}>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Continue Shopping
                    </button>
                  </NavLink>
                </div>
              ) : (
                <div className="space-y-6">
  {cartItems.map((item) => (
    <div
      key={item.id}
      className="flex flex-col md:flex-row items-center md:space-x-6 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 sm:w-32 sm:h-32 object-fill rounded-lg shadow-sm"
      />
      <div className="flex-1 space-y-2 text-center md:text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">
          {item.name}
        </h3>
        <p className="text-blue-600 font-bold">${item.price}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-2 bg-white rounded-lg shadow-sm">
            <button
              onClick={() => dispatch(DecreaseQuantity(item.id))}
              className="p-2 hover:bg-gray-100 rounded-l-lg transition-colors"
            >
              <Minus className="h-4 w-4 text-gray-600" />
            </button>
            <span className="w-12 text-center font-semibold">
              {item.quantity}
            </span>
            <button
              onClick={() => dispatch(IncreseQuantity(item.id))}
              className="p-2 hover:bg-gray-100 rounded-r-lg transition-colors"
            >
              <Plus className="h-4 w-4 text-gray-600" />
            </button>
          </div>
          <button
            onClick={() => handleDeleteSingleItem(item.id)}
            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="text-right md:text-left mt-4 md:mt-0">
        <p className="text-lg font-bold">
          {item.quantity === 1
            ? item.price
            : Math.round(item.price * item.quantity)}
        </p>
      </div>
    </div>
  ))}
</div>

              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 
                style={{ fontFamily: "'Dancing Script', cursive" }}
              className="text-[14px] md:text-[25px] lg:text-[25px] font-bold mb-6">Order Summary</h2>

              {/* Delivery Options */}
              <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center mb-4">
                  <Truck className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-semibold">Delivery</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Free delivery on orders over $100
                </p>
                
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <Gift className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-semibold">Promo Code</span>
                </div>
                <div className="container">
                  

                  <div className="flex flex-col space-x-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={handleChange}
                      placeholder="Enter code"
                      className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                      onClick={handleApply}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 mt-4 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${CartTotalPrice >= 40 && discount ? (CartTotalPrice-30).toFixed(2):CartTotalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${(CartTotalPrice/12).toFixed(2)}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    {/* <span>${total.toFixed(2)}</span> */}
                  </div>
                </div>
              </div>

              <button
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => toast.info("Proceeding to checkout...")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
