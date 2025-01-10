import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStores, { store } from "./Redux/store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import { useAuth0 } from "@auth0/auth0-react";


const App = () => {
  const { isAuthenticated } = useAuth0();

  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStores}>
        <ToastContainer autoClose={3000} />
        <Router>
          <Routes>
            <Route path={"/signup"} element={<Signup />} />
            {isAuthenticated ? (
              <>
                <Route path={"/"} element={<Home />} />
                <Route path={"/cart-items"} element={<Cart />} />
              </>
            ) : 
            <>
            <Route path={"/"} element={<Signup />} />
          
            </>
            
            }
             
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
