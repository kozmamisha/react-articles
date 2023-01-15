import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Article, SearchArticleParams } from './types';

export const fetchArticles = createAsyncThunk<Article[], SearchArticleParams>(
  'article/fetchArticleStatus',
  async (params) => {
    const { isSearched } = params;
    const { data } = await axios.get(
      `https://63c062c2e262345656fe028b.mockapi.io/items?&${isSearched}`,
    );

    return data;
  },
);
