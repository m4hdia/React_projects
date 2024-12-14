// src/redux/productsReducer.js

import { configureStore } from "@reduxjs/toolkit";

// Action types
const ADD_PRODUCT = "ADD_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";

// Initial state
const initialState = {
  produits: [
    { code: 1, libelle: "produit 1" },
    { code: 2, libelle: "produit 2" },
    { code: 3, libelle: "produit 3" },
  ],
};

// Reducer function
function productsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        produits: [...state.produits, action.payload], // Add a new product
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        produits: state.produits.filter(
          (product) => product.code !== action.payload // Remove product by code
        ),
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        produits: state.produits.map((product) =>
          product.code === action.payload.code
            ? action.payload // Update matching product
            : product
        ),
      };
    default:
      return state;
  }
}

// Configure store
const store = configureStore({
  reducer: productsReducer, // Pass the reducer directly
});

export { store, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT };
