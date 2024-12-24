// src/redux/savedJobsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const savedJobsSlice = createSlice({
  name: 'savedJobs',
  initialState: [],
  reducers: {
    saveJob: (state, action) => {
      if (!state.some(job => job._id === action.payload._id)) {
        state.push(action.payload);
      }
    },
    unsaveJob: (state, action) => {
      return state.filter(job => job._id !== action.payload);
    },
  },
});

export const { saveJob, unsaveJob } = savedJobsSlice.actions;
export default savedJobsSlice.reducer;