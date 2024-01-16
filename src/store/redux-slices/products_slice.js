import { createSlice } from "@reduxjs/toolkit";
import apiMiddleware from "../../components/common/Server/apiMiddleware";

const initialState = {
  products: [],
  issuedProducts: [],
  isLoading: false,
  isError: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setIssuedProducts: (state, action) => {
      state.issuedProducts = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export const { setIssuedProducts } = productsSlice.actions;
export const { setLoading } = productsSlice.actions;
export const { setError } = productsSlice.actions;
export const selectIsLoading = (state) => state.products.isLoading;
export const selectIsError = (state) => state.products.isError;
export const selectProducts = (state) => state.products.products;
export const selectIssuedProducts = (state) => state.products.issuedProducts;

export default productsSlice.reducer;

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const products = await apiMiddleware("admin/products/products");
    dispatch(setProducts(products));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(true));
    dispatch(setLoading(false));
  }
};

export const fetchIssuedProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const issuedProducts = await apiMiddleware("admin/sales/sales");
    dispatch(setIssuedProducts(issuedProducts));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(true));
    dispatch(setLoading(false));
  }
};
