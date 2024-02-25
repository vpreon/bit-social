import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getPostsQry } from '@/api/posts';
import { Posts, Post } from '@/types';

import { BaseStateEntity } from '../types';

const initialState: BaseStateEntity<Post> = {
  loading: false,
  data: {
    count: 0,
    previous: null,
    next: null,
    results: [],
  },
};

export const getPosts = createAsyncThunk('posts/getPosts', getPostsQry);

const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    insertPost: (state, action: PayloadAction<Post>) => {
      state.data.results.unshift(action.payload);
    },
    removePost: (state, action: PayloadAction<number>) => {
      state.data.results = state.data.results.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action: PayloadAction<Posts>) => {
      state.loading = false;
      state.data = action.payload;
    });
  },
});

export const { insertPost, removePost } = slice.actions;

export default slice.reducer;
