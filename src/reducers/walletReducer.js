import { createSlice } from '@reduxjs/toolkit'

export const walletSlice = createSlice({
  name: 'wallet_token',
  initialState: {
    value:  (localStorage.getItem('loggedInToken') !== null && localStorage.getItem('loggedInToken') !== 'null' )  ? localStorage.getItem('loggedInToken') : false,
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload
      localStorage.setItem('loggedInToken', action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { update } = walletSlice.actions
export const currrent_wallet_token = state => state.wallet_token.value;
export default walletSlice.reducer