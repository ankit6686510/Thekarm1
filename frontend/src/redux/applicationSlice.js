import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/constant";

// Thunk for fetching applicants
export const fetchApplicants = createAsyncThunk(
  'application/fetchApplicants',
  async () => {
    const response = await axios.get(`${APPLICATION_API_END_POINT}/applicants`);
    return response.data.applicants; // Adjust as needed based on your API response structure
  }
);

const applicationSlice = createSlice({
  name: 'application',
  initialState: {
    applicants: null,
    status: 'idle', // For tracking request status
    error: null,
  },
  reducers: {
    setAllApplicants: (state, action) => {
      state.applicants = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApplicants.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchApplicants.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.applicants = action.payload;
      })
      .addCase(fetchApplicants.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setAllApplicants } = applicationSlice.actions;
export default applicationSlice.reducer;










// import { createSlice } from "@reduxjs/toolkit";

// const applicationSlice = createSlice({
//     name:'application',
//     initialState:{
//         applicants:null,
//     },
//     reducers:{
//         setAllApplicants:(state,action) => {
//             state.applicants = action.payload;
//         }
//     }
// });
// export const {setAllApplicants} = applicationSlice.actions;
// export default applicationSlice.reducer;