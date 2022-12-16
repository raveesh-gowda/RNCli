import {configureStore} from '@reduxjs/toolkit';

import counterReducer from '../../screens/Counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
