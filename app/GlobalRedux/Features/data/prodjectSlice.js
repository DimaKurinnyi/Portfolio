'use client';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProjectById = createAsyncThunk(
  'projectSlice/fetchProjectById',
  async (projectId) => {
    const response = await axios.get(
      `https://647ce039c0bae2880ad14a6f.mockapi.io/projects/${projectId}`,
    );
    return response.data;
  },
);

const projectSlice = createSlice({
  name: 'projectSlice',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjectById.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

//export { fetchProjectById };
export default projectSlice.reducer;
