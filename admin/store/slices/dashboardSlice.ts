import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminApi, type Stats } from "@/lib/api";

type DashboardState = {
  stats: Stats | null;
  loading: boolean;
  error: string;
  lastUpdated: string | null;
};

const initialState: DashboardState = {
  stats: null,
  loading: false,
  error: "",
  lastUpdated: null,
};

export const fetchDashboardStats = createAsyncThunk(
  "dashboard/fetchStats",
  async (_, { rejectWithValue }) => {
    try {
      return await adminApi.stats();
    } catch {
      return rejectWithValue("Failed to load dashboard stats");
    }
  },
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardStats.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchDashboardStats.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload;
        state.lastUpdated = new Date().toISOString();
      })
      .addCase(fetchDashboardStats.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload ?? "Failed to load dashboard stats");
      });
  },
});

export default dashboardSlice.reducer;
