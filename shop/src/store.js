import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom';
import {data, cartData} from './data/data.js'

let shoes = createSlice({
  name : 'shoes'
  ,initialState : data
  ,reducers :{
    AddData(state, action){
      state.push(action.payload);
    }
  }
})

let cart = createSlice({
  name : 'cart'
  ,initialState : cartData
  ,reducers : {
    AddCart(state, action){
      state.push(action.payload);
    }
    ,TakeOutCart(state, action){
      state.splice(state.findIndex(action.payload), 1);
    }
    ,AddCount(state, action){
      
    }
  }
})

export let {AddData} = shoes.actions;
export let {AddCart, TakeOutCart} = cart.actions;

export default configureStore({
  reducer :{
    shoes : shoes.reducer
    ,cart : cart.reducer
  }
});