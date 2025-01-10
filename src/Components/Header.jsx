import React, { useEffect, useState } from 'react'
import { ShoppingCart, User, Search } from "lucide-react";
import { Navigate, NavLink, redirect, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
const Header = () => {
const {user,isAuthenticated,logout} = useAuth0();
const [logouts,setLogout] = useState(false)
  const foodItemsCount = useSelector(
        (state) => state?.FoodCartSlicer?.FoodCartItems
      );
      console.log('isAuthenticated',isAuthenticated)
      const navigate = useNavigate();
      const handleLogout = ()=>{
        setLogout(true)
        logout();
        navigate('/signup')
      }



    
     
      const countItems = foodItemsCount?.length;
  return (
    <div>
        <header className="relative z-10">
          <nav className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <a
                style={{ fontFamily: "'Dancing Script', cursive" }}
                href="/"
                className="text-4xl font-bold text-white"
              >
                Foodi
              </a>

              <div className="hidden ml-[143px] md:flex justify-center items-center space-x-8">
                <a href="/" className="text-white hover:text-gray-200">
                  Home
                </a>
                <a href="#menu" className="text-white hover:text-gray-200">
                  Menu
                </a>
                <a href="#about" className="text-white hover:text-gray-200">
                  About
                </a>
                <a href="#bookTable" className="text-white hover:text-gray-200">
                  Book Table
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <button variant="ghost" size="icon">
                  <User className="h-5 w-5 text-white" />
                </button>
                <button className="relative flex items-center justify-center bg-transparent text-white hover:text-gray-300 p-2 rounded-full transition duration-300">
                  <NavLink to={"/cart-items"}>
                    <ShoppingCart className="h-5 w-5 text-white" />
                    <span className="absolute top-0 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {countItems > 0 ? countItems : 0}
                    </span>
                  </NavLink>
                </button>

                <button variant="ghost" size="icon">
                  <Search className="h-5 w-5 text-white" />
                </button>
                {isAuthenticated ?
                <button onClick={handleLogout} className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md transition-all">
                  logout
                </button>:
                
                
                <NavLink to={'/signup'}>

                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md transition-all">
                Sign up
                </button>
                </NavLink>
                }
              </div>
            </div>
          </nav>
        </header>
    </div>
  )
}

export default Header