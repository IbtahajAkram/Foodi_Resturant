import { configureStore } from "@reduxjs/toolkit";
import {  persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { FoodCartSlicer } from "../CartSlicer/FoodCartSlicer";
import { persistStore } from "redux-persist";
const storages = {
  key:"root",
  storage,  
};

const combineReducer = combineReducers({
    FoodCartSlicer:FoodCartSlicer.reducer,
});

const allReducer = persistReducer(storages,combineReducer);

export const store = configureStore({
    reducer:allReducer,
});

export const persistStores = persistStore(store);

export default persistStores