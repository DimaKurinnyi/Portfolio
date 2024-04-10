'use client'

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const dateSlice = createSlice({
  name: 'date',
  initialState: [],
  reducers: {
    setDate: (state, action) => {
      return action.payload;
    },
  },
});

export const { setDate } = dateSlice.actions;

export const fetchDate = () => async (dispatch) => {
  // try {
    const response = await axios.get('https://647ce039c0bae2880ad14a6f.mockapi.io/projects');
    const date = response.data; // Предполагается, что сервер возвращает дату в поле "date"
    dispatch(setDate(date));
  // } catch (error) {
  //   console.error('Ошибка получения даты с сервера', error);
  // }
};

export default dateSlice.reducer;
