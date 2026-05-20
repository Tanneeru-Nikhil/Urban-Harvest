import { createSlice } from '@reduxjs/toolkit';
import { mockProducts } from '../../mock/data';

const initialState = {
  products: mockProducts,
  searchTerm: '',
  filterStatus: 'All', // All, Available, Out of Stock
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
    addProduct: (state, action) => {
      state.products.unshift(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    },
    editProduct: (state, action) => {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    }
  },
});

export const { setSearchTerm, setFilterStatus, addProduct, deleteProduct, editProduct } = productSlice.actions;
export default productSlice.reducer;
