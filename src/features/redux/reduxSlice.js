import { createSlice } from '@reduxjs/toolkit'

export const reduxSlice = createSlice({
  name: 'redux',
  initialState: {
    value: 0,
    apidata:[],
    searchuser:[]
  },
  reducers: {
    getUserdata: (state,action) => {
      state.apidata = action.payload
      // console.log('redux userlist ----- ',action.payload)
    },
    searchUserdata: (state,action) => {
      state.searchuser = action.payload
      // console.log('redux userlist ----- ',action.payload)
    }
  },
})

export const { getUserdata,searchUserdata } = reduxSlice.actions

export default reduxSlice.reducer