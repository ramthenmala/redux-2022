import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/postSlice/postsSlice';
import userReducer from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: userReducer,
  },
});
