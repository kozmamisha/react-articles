import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchArticles } from './asyncActions';
import { Article, ArticleSliceState, Status } from './types';

const initialState: ArticleSliceState = {
  items: [],
  status: Status.LOADING,
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Article[]>) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });

    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = articleSlice.actions;

export default articleSlice.reducer;
