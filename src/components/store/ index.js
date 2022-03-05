import React from "react";

import counterSlice  from '../reducers'
import authSlice from '../reducers/auth';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer},
})

export default store;
