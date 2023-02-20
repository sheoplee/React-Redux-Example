import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import sliceStore from './sliceStore';

const store = configureStore({
    reducer: {
        slice: sliceStore.reducer,
    },
}, composeWithDevTools());

export default store;
