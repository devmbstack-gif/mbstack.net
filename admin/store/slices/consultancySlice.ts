import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminApi, type ConsultancyRequest } from "@/lib/api";

type ConsultancyState = {
  items: ConsultancyRequest[];
  loading: boolean;
  error: string;
  updatingId: string | null;
  filter: "all" | "pending" | "contacted" | "closed";
};

const initialState: ConsultancyState = {
  items: [],
  loading: false,
  error: "",
  updatingId: null,
  filter: "all",
};

export const fetchConsultancy = createAsyncThunk(
  "consultancy/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      return await adminApi.consultancy();
    } catch {
      return rejectWithValue("Failed to load consultancy requests");
    }
  },
);

export const updateConsultancyStatus = createAsyncThunk(
  "consultancy/updateStatus",
  async ({ id, status }: { id: string; status: string }) => {
    await adminApi.updateConsultancyStatus(id, status);
    return { id, status };
  },
);

const consultancySlice = createSlice({
  name: "consultancy",
  initialState,
  reducers: {
    setConsultancyFilter(
      state,
      action: { payload: ConsultancyState["filter"] },
    ) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchConsultancy.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchConsultancy.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchConsultancy.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload ?? "Failed to load consultancy");
      })
      .addCase(updateConsultancyStatus.pending, (state, action) => {
        state.updatingId = action.meta.arg.id;
      })
      .addCase(updateConsultancyStatus.fulfilled, (state, action) => {
        state.updatingId = null;
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, status: action.payload.status }
            : item,
        );
      })
      .addCase(updateConsultancyStatus.rejected, (state) => {
        state.updatingId = null;
      });
  },
});

export const { setConsultancyFilter } = consultancySlice.actions;
export default consultancySlice.reducer;
