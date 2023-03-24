import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSteaksApi = createAsyncThunk(
  "steaksSlice/fetchData",
  async () => {
    const res = await fetch("http://localhost:9000/steak");
    const data = await res.json();
    return data;
  }
);
const steaksSlice = createSlice({
  initialState: [],
  name: "steakSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSteaksApi.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const {} = steaksSlice.actions;
export default steaksSlice.reducer;
