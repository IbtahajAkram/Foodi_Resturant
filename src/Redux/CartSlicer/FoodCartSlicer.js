import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  FoodCartItems: [],
};

export const FoodCartSlicer = createSlice({
  name: "foodCarts",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const checkUniqueItem = state.FoodCartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (!checkUniqueItem) {
        state.FoodCartItems.push(action.payload);
        toast.success("Item Successfully Add in Cart!");
      } else {
        toast.error("Already Item Added in Cart!");
      }
    },
    DeleteAllCartItems: (state, action) => {
      if (state.FoodCartItems.length > 0) {
        state.FoodCartItems = [];
        toast.success("All Items Successfully Delete from Cart!");
      } else {
        toast.error("Already Cart is empty!");
      }
    },
    DeleteSingleItems: (state, action) => {
     state.FoodCartItems = state.FoodCartItems.filter(
        (item) => item.id !== action.payload
      );
      toast.success("Item Successfully Delete from Cart!");
    },
    IncreseQuantity:(state,action)=>{
      const findQuantity = state.FoodCartItems.find((item)=>item.id === action.payload);
      if(findQuantity){
        findQuantity.quantity +=1
      }
    },
    DecreaseQuantity:(state,action)=>{
      const findQuantityDecrease = state.FoodCartItems.find((item)=>item.id === action.payload);
      if(findQuantityDecrease.quantity >1){
        findQuantityDecrease.quantity = findQuantityDecrease.quantity - 1
      }
    }

  },
});

export const { AddToCart, DeleteSingleItems, DeleteAllCartItems,IncreseQuantity,DecreaseQuantity } =
  FoodCartSlicer.actions;
export default FoodCartSlicer.reducer;
