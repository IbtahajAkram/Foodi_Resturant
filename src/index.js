import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Initialize the QueryClient
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-2pllpgf8xwxilqx1.us.auth0.com"
    clientId="MjdspjrD0NhcqKcyMzNXbLhfAehMEbP0"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    {/* Wrap App with QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Auth0Provider>
);
