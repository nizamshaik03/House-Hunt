import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listings: [],
  user: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setListings: (state, action) => {
      state.listings = action.payload.listings;
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
    },
    setLogout: (state) => {
      state.user = null;
    },
    setWishList: (state, action) => {
      state.user.wishList = action.payload;
    },
    setTripList: (state, action) => {
      state.user.tripList = action.payload;
    },
    setPropertyList: (state, action) => {
      state.user.propertyList = action.payload;
    },
  },
});

export const {
  setListings,
  setLogin,
  setLogout,
  setWishList,
  setTripList,
  setPropertyList
} = appSlice.actions;

export default appSlice.reducer;
