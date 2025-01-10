// import React from "react";
// import { NavLink } from "react-router-dom";
// import { ShoppingCart } from "lucide-react"; // Assuming you're using the `react-feather` library
// import { ArrowLeft } from "lucide-react";
// import { useSelector } from "react-redux";

// const MenuPage = () => {
//   return (
//     <div className="p-6 space-y-8">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-8">
//         <div className="flex items-center space-x-4">
//           <NavLink to={"/"}>
//             <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//               <ArrowLeft className="h-6 w-6 text-gray-600" />
//             </button>
//           </NavLink>
//           <h1 className="text-4xl font-bold text-gray-900">Menu</h1>
//         </div>

//         {/* Cart Navigation */}
//         <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
//           <ShoppingCart className="h-6 w-6 text-blue-600" />
//           <span className="ml-2 text-lg font-semibold text-gray-900">
//             {/* {menuItems.length} {menuItems.length === 1 ? "item" : "items"} */}
//           </span>
//         </div>
//       </div>

//       {/* Menu List */}
//       <div className="space-y-6">
//         {cartItems?.map((item) => (
//           <div
//             key={item.id}
//             className="flex items-center space-x-6 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-32 h-32 object-fill rounded-lg shadow-sm"
//             />
//             <div className="flex-1 space-y-2">
//               <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
//               <p className="text-blue-600 font-bold">${item.price}</p>
//               <button
//                 // onClick={(em)}
//                 className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md transition-all"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MenuPage;
