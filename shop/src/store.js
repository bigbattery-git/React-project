import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom';
import {data} from './data/data.js'

let shoes = createSlice({
  name : 'shoes'
  ,initialState : data
})

export default configureStore({
  reducer :{
    shoes : shoes.reducer
  }
});