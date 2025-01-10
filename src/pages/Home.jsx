"use client";
import { useEffect, useState } from "react";
import { Recipes } from "../FoodItems";
import { AddToCart } from "../Redux/CartSlicer/FoodCartSlicer";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Home = () => {
  const [fooditems, setFoodItems] = useState(Recipes);
  const [activeFilter, setActiveFilter] = useState("");
  const {isAuthenticated} = useAuth0();
  const foodItemsCount = useSelector(
    (state) => state?.FoodCartSlicer?.FoodCartItems
  );
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const UniqueCatagory = [...new Set(fooditems.map((item) => item.category))];
  const filterProduct = !activeFilter
    ? fooditems
    : fooditems.filter(
        (ItemCatagory) => ItemCatagory.category === activeFilter
      );
        
  return (
    <main className="min-h-screen">
      <div className="relative">
        <div className="absolute h-[100%] inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
            alt="Restaurant background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <Header/>
        <div className="relative z-10 container mx-auto px-4 py-[15%] text-center">
          <div className="max-w-[580px] mx-auto">
            <h1
              style={{ fontFamily: "'Dancing Script', cursive" }}
              className="text-6xl font-bold text-white mb-6"
            >
              Fast Food Restaurant
            </h1>
            <p className="text-[17px] text-gray-100 mb-8">
              Whether it's a celebration or a cozy meal, we promise an
              unforgettable dining experience that delights your senses.
            </p>
            <a href="#menu">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-md transition-all">
              Order Now
            </button>
            </a>
          </div>
        </div>
      </div>
      <section className="py-16 flex items-center justify-center">
        <div className="container  px-4">
          <h2
            style={{ fontFamily: "'Dancing Script', cursive" }}
            className="text-4xl font-bold text-center mb-12"
          >
            Our Menu
          </h2>

          <div className="flex flex-wrap items-center justify-center w-[80%] mx-auto gap-4 mb-8">
            <button
              onClick={() => setActiveFilter("")}
              className="px-4 py-2 rounded-full  bg-gray-200 text-gray-700"
            >
              All Menu
            </button>
            {UniqueCatagory.map((filter) => (
              <button
                id="menu"
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full ${
                  activeFilter === filter
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filterProduct?.map((recipe, index) => (
              <div
                key={index}
                className="bg-white rounded-lg bg-transparent shadow-md overflow-hidden"
              >
                <img
                  src={recipe?.image}
                  alt={recipe?.name}
                  className="w-full h-48 object-fill px-9 py-2"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{recipe?.name}</h3>
                  <p className="text-gray-600 mb-4">{recipe?.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">${recipe?.price}</span>
                    <button
                      onClick={() => {
                        const foodItems = {
                          id: recipe?.id,
                          name: recipe?.name,
                          price: recipe?.price,
                          image: recipe?.image,
                          quantity: 1,
                        };
                        dispatch(AddToCart(foodItems));
                      }}
                      className="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-600"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="bookTable"
        className="py-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2
            style={{ fontFamily: "'Dancing Script', cursive" }}
            className="text-5xl font-bold text-white mb-12"
          >
            Book A Table
          </h2>

          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-xl">
            <div className="space-y-4">
              <input
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Your Name"
              />
              <input
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Phone Number"
              />
              <input
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Your Email"
                type="email"
              />
              <select className="w-full px-4 py-2 border rounded-md">
                <option value="" disabled>
                  How many persons?
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <input
                className="w-full px-4 py-2 border rounded-md"
                type="date"
              />
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded-md transition-all">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section id="about" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b"
                  alt="Restaurant interior"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="md:w-1/2">
                <h2
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                  className="text-4xl font-bold mb-6"
                >
                  We Are Chef
                </h2>
                <p className="text-gray-600 mb-6">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                <button className="bg-yellow-500 text-black px-8 py-3 rounded-full hover:bg-yellow-600">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </section>

     <Footer/>
      </main>
    </main>
  );
};

export default Home;
